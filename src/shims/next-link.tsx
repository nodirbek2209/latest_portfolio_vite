import * as React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  prefetch?: boolean
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function NextLinkShim(
  { href, children, ...props },
  ref,
) {
  return (
    <a ref={ref} href={href} {...props}>
      {children}
    </a>
  )
})

export default Link

