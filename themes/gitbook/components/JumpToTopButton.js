
/**
 * Jump to top of page
 * This control will appear when the screen slides down 500 pixels
 * @param targetRef The target html tag associated with the height
 * @param showPercent whether to display the percentage
 * @returns {JSX.Element}
 * @constructor
 */
const JumpToTopButton = ({ showPercent = false, percent, className }) => {
  return (
          <div
              id="jump-to-top"
              data-aos="fade-up"
              data-aos-duration="300"
              data-aos-once="false"
              data-aos-anchor-placement="top-center"
              className='fixed xl:right-80 right-2 mr-10 bottom-24 z-20'>
              <i className='fas fa-chevron-up cursor-pointer p-2 rounded-full border bg-white dark:bg-hexo-black-gray' onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} />
          </div>
  )
}

export default JumpToTopButton
