type Avatar = {
  /** medium 288px */
  medium: string

  /** large 512 */
  large: string
}

// @TODO: Improve composition with Gravatar
const base =
  'https://www.gravatar.com/avatar/9ffd40e78c60ff6c30e110354ee28d360328ff5b5b16948f314363c24095da4e'

export const avatar: Avatar = {
  medium: `${base}?size=288`,
  large: `${base}?size=512`,
}
