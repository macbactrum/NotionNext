/* eslint-disable react/no-unknown-property */
/**
 * The style here only takes effect on the current theme
 * The @apply syntax of tailwindCSS is not supported here.
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
    // background color
    .dark body{
        background-color: black;
    }

  `}</style>
}

export { Style }
