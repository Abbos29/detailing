import { useRouter } from 'next/router'
import Link from 'next/link'
import s from './Breadcrumbs.module.scss'

const Breadcrumbs = () => {
  const router = useRouter()
  const pathParts = router.asPath.split('/').filter((part) => part)

  return (
    <div className={s.breadcrumbs}>
      <Link href="/">Home</Link>
      {pathParts.map((part, index) => {
        const href = '/' + pathParts.slice(0, index + 1).join('/')
        return (
          <>
            <span key={index}>
              {' / '}
            </span>
            <Link href={href}>{decodeURIComponent(part)}</Link>
          </>
        )
      })}
    </div>
  )
}

export default Breadcrumbs
