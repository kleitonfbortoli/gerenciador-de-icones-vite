import type { AsyncComponentLoader } from 'vue'

const icons = import.meta.glob<AsyncComponentLoader>('/src/assets/icons/**/*.svg')

const regex = /[^/\\]+(?=\.svg$)/i

const IconList = {} as { [iconName: string]: AsyncComponentLoader }

for (const iconName in icons) {
  const match = iconName.match(regex)

  const svgName = match ? match[0] : null

  if (!svgName) {
    if (import.meta.env.DEV) {
      throw new Error(`Não foi possível extratir o nome do svg iconName:${iconName}`)
    }

    continue
  }

  if (IconList[svgName]) {
    if (import.meta.env.DEV) {
      throw new Error(
        `Nome de ícone duplicado, não podem haver nomes de ícones duoplicados iconName:${iconName}`
      )
    }

    continue
  }

  IconList[svgName] = icons[iconName]
}
export default IconList

export const IconsNames = Object.keys(IconList)
