import { useRouter } from 'next/router'
import Link from 'next/link'
import React from 'react'
import s from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
  const router = useRouter()
  
  const pathWithoutQuery = router.asPath.split('?')[0]
  const pathParts = pathWithoutQuery.split('/').filter((part) => part)

  return (
    <div className={s.breadcrumbs}>
      <Link href="/">Home</Link>
      {pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/')
        
        return (
          <React.Fragment key={index}>
            <span>{' / '}</span>
            <Link href={href}>{decodeURIComponent(part)}</Link>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Breadcrumbs