'use client'

import CONFIG from './config'
import { useRouter } from 'next/router'
import { useEffect, useState, createContext, useContext } from 'react'
import { isBrowser } from '@/lib/utils'
import Footer from './components/Footer'
import InfoCard from './components/InfoCard'
import RevolverMaps from './components/RevolverMaps'
import TopNavBar from './components/TopNavBar'
import SearchInput from './components/SearchInput'
import { useGlobal } from '@/lib/global'
import Live2D from '@/components/Live2D'
import BLOG from '@/blog.config'
import NavPostList from './components/NavPostList'
import ArticleInfo from './components/ArticleInfo'
import Catalog from './components/Catalog'
import Announcement from './components/Announcement'
import PageNavDrawer from './components/PageNavDrawer'
import FloatTocButton from './components/FloatTocButton'
import { AdSlot } from '@/components/GoogleAdsense'
import JumpToTopButton from './components/JumpToTopButton'
import ShareBar from '@/components/ShareBar'
import CategoryItem from './components/CategoryItem'
import TagItemMini from './components/TagItemMini'
import ArticleAround from './components/ArticleAround'
import Comment from '@/components/Comment'
import TocDrawer from './components/TocDrawer'
import NotionPage from '@/components/NotionPage'
import { ArticleLock } from './components/ArticleLock'
import { Transition } from '@headlessui/react'
import { Style } from './style'
import CommonHead from '@/components/CommonHead'
import BlogArchiveItem from './components/BlogArchiveItem'
import BlogPostListPage from './components/BlogPostListPage'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const WWAds = dynamic(() => import('@/components/WWAds'), { ssr: false })

//Theme global variables
const ThemeGlobalGitbook = createContext()
export const useGitBookGlobal = () => useContext(ThemeGlobalGitbook)

/**
 * Basic layout
 * Adopt left and right layout, use top navigation bar on mobile terminal
 * @returns {JSX.Element}
 * @constructor
 */
const LayoutBase = (props) => {
  const { children, post, allNavPages, slotLeft, slotRight, slotTop, meta } = props
  const { onLoading } = useGlobal()
  const router = useRouter()
  const [tocVisible, changeTocVisible] = useState(false)
  const [pageNavVisible, changePageNavVisible] = useState(false)
  const [filteredNavPages, setFilteredNavPages] = useState(allNavPages)

  const showTocButton = post?.toc?.length > 1

  useEffect(() => {
    setFilteredNavPages(allNavPages)
  }, [post])

  return (
    <ThemeGlobalGitbook.Provider value={{ tocVisible, changeTocVisible, filteredNavPages, setFilteredNavPages, allNavPages, pageNavVisible, changePageNavVisible }}>
      <CommonHead meta={meta} />
      <Style />

      <div id='theme-gitbook' className='bg-white dark:bg-hexo-black-gray w-full h-full min-h-screen justify-center dark:text-gray-300'>
        {/* top navigation bar */}
        <TopNavBar {...props} />

        <main id='wrapper' className={(BLOG.LAYOUT_SIDEBAR_REVERSE ? 'flex-row-reverse' : '') + 'relative flex justify-between w-full h-full mx-auto'}>

          {/* Left side sliding drawer */}
          <div className={'font-sans hidden md:block border-r dark:border-transparent relative z-10 '}>
            <div className='w-72 py-14 px-6 sticky top-0 overflow-y-scroll h-screen scroll-hidden'>
              {slotLeft}
              <SearchInput className='my-3 rounded-md' />
              <div className='mb-20'>
                {/* List of all articles */}
                <NavPostList filteredNavPages={filteredNavPages} />
              </div>

            </div>

            <div className='w-72 fixed left-0 bottom-0 z-20 bg-white'>
              <Footer {...props} />
            </div>
          </div>

          <div id='center-wrapper' className='flex flex-col justify-between w-full relative z-10 pt-14 min-h-screen'>

            <div id='container-inner' className='w-full px-7 max-w-3xl justify-center mx-auto'>
              {slotTop}
              <WWAds className='w-full' orientation='horizontal' />

              <Transition
                show={!onLoading}
                appear={true}
                enter="transition ease-in-out duration-700 transform order-first"
                enterFrom="opacity-0 translate-y-16"
                enterTo="opacity-100"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-16"
                unmount={false}
              >
                {children}
              </Transition>

              {/* Google ads */}
              <AdSlot type='in-article' />
              <WWAds className='w-full' orientation='horizontal' />

              {/* Back button */}
              <JumpToTopButton />
            </div>

            {/* bottom */}
            <div className='md:hidden'>
              <Footer {...props} />
            </div>
          </div>

          {/*  Right side sliding drawer */}
          <div style={{ width: '32rem' }} className={'hidden xl:block dark:border-transparent relative z-10 '}>
            <div className='py-14 px-6 sticky top-0'>
              <ArticleInfo post={props?.post ? props?.post : props.notice} />

              <div className='py-4'>
                <Catalog {...props} />
                {slotRight}
                {router.route === '/' && <>
                  <InfoCard {...props} />
                  {CONFIG.WIDGET_REVOLVER_MAPS === 'true' && <RevolverMaps />}
                  <Live2D />
                </>}
                {/* The gitbook theme homepage only displays announcements */}
                <Announcement {...props} />
              </div>

              <AdSlot type='in-article' />
              <Live2D />

            </div>
          </div>

        </main>

        {/* Mobile floating directory button */}
        {showTocButton && !tocVisible && <div className='md:hidden fixed right-0 bottom-52 z-30 bg-white border-l border-t border-b dark:border-gray-800 rounded'>
          <FloatTocButton {...props} />
        </div>}

        {/* Mobile navigation drawer */}
        <PageNavDrawer {...props} filteredNavPages={filteredNavPages} />

        {/* Mobile bottom navigation bar */}
        {/* <BottomMenuBar {...props} className='block md:hidden' /> */}

      </div>
    </ThemeGlobalGitbook.Provider>
  )
}

/**
 * front page
 * Redirect to an article details page
 * @param {*} props
 * @returns
 */
const LayoutIndex = (props) => {
  const router = useRouter()
  useEffect(() => {
    router.push(CONFIG.INDEX_PAGE).then(() => {
      // console.log('Jump to the specified homepage', CONFIG.INDEX_PAGE)
      setTimeout(() => {
        if (isBrowser) {
          const article = document.getElementById('notion-article')
          if (!article) {
            console.log('Please check if your Notion database contains this slug page： ', CONFIG.INDEX_PAGE)
            const containerInner = document.querySelector('#theme-gitbook #container-inner')
            const newHTML = `<h1 class="text-3xl pt-12  dark:text-gray-300">Lỗi Cấu Hình</h1><blockquote class="notion-quote notion-block-ce76391f3f2842d386468ff1eb705b92"><div>Vui lòng thêm cột 'slug' vào database Notion của bạn và điền slug cho tất cả các bài viết (notice, ${CONFIG.INDEX_PAGE}, articles, v.v.)</div></blockquote>`
            containerInner?.insertAdjacentHTML('afterbegin', newHTML)
          }
        }
      }, 7 * 1000)
    })
  }, [])

  return <LayoutBase {...props} />
}

/**
 * Article list None
 * All depends on page navigation
 * @param {*} props
 * @returns
 */
const LayoutPostList = (props) => {
  return <LayoutBase {...props} >
    <div className='mt-10'><BlogPostListPage {...props} /></div>
  </LayoutBase>
}

/**
 * Article details
 * @param {*} props
 * @returns
 */
const LayoutSlug = (props) => {
  const { post, prev, next, lock, validPassword } = props

  return (
    <LayoutBase {...props} >
      {/* Article lock */}
      {lock && <ArticleLock validPassword={validPassword} />}

      {!lock && <div id='container'>

        {/* title */}
        <h1 className="text-3xl pt-12  dark:text-gray-300">{post?.title}</h1>

        {/* Notion article body */}
        {post && (<section id="article-wrapper" className="px-1">
          <NotionPage post={post} />

          {/* share */}
          <ShareBar post={post} />
          {/* Article classification and tag information */}
          <div className='flex justify-between'>
            {CONFIG.POST_DETAIL_CATEGORY && post?.category && <CategoryItem category={post.category} />}
            <div>
              {CONFIG.POST_DETAIL_TAG && post?.tagItems?.map(tag => <TagItemMini key={tag.name} tag={tag} />)}
            </div>
          </div>

          {post?.type === 'Post' && <ArticleAround prev={prev} next={next} />}

          <AdSlot />
          <WWAds className='w-full' orientation='horizontal' />

          <Comment frontMatter={post} />
        </section>)}

        <TocDrawer {...props} />
      </div>}
    </LayoutBase>
  )
}

/**
 * No search
 * All depends on page navigation
 * @param {*} props
 * @returns
 */
const LayoutSearch = (props) => {
  return <LayoutBase {...props}></LayoutBase>
}

/**
 *Archive pages are basically not used
 * All depends on page navigation
 * @param {*} props
 * @returns
 */
const LayoutArchive = (props) => {
  const { archivePosts } = props

  return <LayoutBase {...props}>
    <div className="mb-10 pb-20 md:py-12 py-3  min-h-full">
      {Object.keys(archivePosts)?.map(archiveTitle => <BlogArchiveItem key={archiveTitle} archiveTitle={archiveTitle} archivePosts={archivePosts} />)}
    </div>
  </LayoutBase>
}

/**
 * 404
 */
const Layout404 = props => {
  return <LayoutBase {...props}>
    <div className='w-full h-96 py-80 flex justify-center items-center'>404 Not found.</div>
  </LayoutBase>
}

/**
 * 分类列表
 */
const LayoutCategoryIndex = (props) => {
  const { categoryOptions } = props
  const { locale } = useGlobal()
  return <LayoutBase {...props}>
    <div className='bg-white dark:bg-gray-700 py-10'>
      <div className='dark:text-gray-200 mb-5'>
        <i className='mr-4 fas fa-th' />{locale.COMMON.CATEGORY}:
      </div>
      <div id='category-list' className='duration-200 flex flex-wrap'>
        {categoryOptions?.map(category => {
          return (
            <Link
              key={category.name}
              href={`/category/${category.name}`}
              passHref
              legacyBehavior>
              <div
                className={'hover:text-black dark:hover:text-white dark:text-gray-300 dark:hover:bg-gray-600 px-5 cursor-pointer py-2 hover:bg-gray-100'}>
                <i className='mr-4 fas fa-folder' />{category.name}({category.count})
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  </LayoutBase>
}

/**
 * tag list
 */
const LayoutTagIndex = (props) => {
  const { tagOptions } = props
  const { locale } = useGlobal()

  return <LayoutBase {...props}>
    <div className="bg-white dark:bg-gray-700 py-10">
      <div className="dark:text-gray-200 mb-5">
        <i className="mr-4 fas fa-tag" />
        {locale.COMMON.TAGS}:
      </div>
      <div id="tags-list" className="duration-200 flex flex-wrap">
        {tagOptions?.map(tag => {
          return (
            <div key={tag.name} className="p-2">
              <TagItemMini key={tag.name} tag={tag} />
            </div>
          )
        })}
      </div>
    </div>
  </LayoutBase>
}

export {
  CONFIG as THEME_CONFIG,
  LayoutIndex,
  LayoutSearch,
  LayoutArchive,
  LayoutSlug,
  Layout404,
  LayoutCategoryIndex,
  LayoutPostList,
  LayoutTagIndex
}
