// Cấu hình Blog Tiếng Việt - Đơn giản và sạch sẽ
const BLOG = {
      // ============ CẤU HÌNH CƠ BẢN ============

      // QUAN TRỌNG: ID trang Notion của bạn
      // Hướng dẫn: Tạo một trang Notion mới, copy URL và lấy ID (32 ký tự)
      // Ví dụ: https://notion.so/your-page-id-here
      NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '2e5d43e2539a80ef80d3d7c875db6937',

      // Cấu hình Next.js
      PSEUDO_STATIC: false,
      NEXT_REVALIDATE_SECOND: 5,

      // Giao diện - next theme shows post list directly
      THEME: process.env.NEXT_PUBLIC_THEME || 'next',
      THEME_SWITCH: false, // Ẩn nút chuyển đổi giao diện

      // Ngôn ngữ - BẮT BUỘC TIẾNG VIỆT
      LANG: process.env.NEXT_PUBLIC_LANG || 'vi-VN', // Tiếng Việt

      // Năm bắt đầu (hiển thị ở footer)
      SINCE: 2026,

      // Chế độ hiển thị: light (sáng), dark (tối), auto (tự động)
      APPEARANCE: 'light',
      APPEARANCE_DARK_TIME: [18, 6],

      // Lời chào trên trang chủ
      GREETING_WORDS: 'Chào mừng đến với blog của tôi 🎉',

      // ============ THÔNG TIN CÁ NHÂN ============

      AUTHOR: 'Mark', // Thay đổi thành tên của bạn
      BIO: 'IT', // Giới thiệu ngắn
      LINK: 'https://macbactrum-notionnext-e4o1bcl2x-trummacbacs-projects.vercel.app', // Địa chỉ blog của bạn
      KEYWORDS: 'blog, tiếng việt, notion', // Từ khóa SEO

      // Liên kết mạng xã hội (để trống nếu không dùng)
      CONTACT_EMAIL: '',
      CONTACT_TWITTER: '',
      CONTACT_GITHUB: '',
      CONTACT_TELEGRAM: '',
      CONTACT_LINKEDIN: '',
      CONTACT_INSTAGRAM: '',
      CONTACT_YOUTUBE: '',

      // ============ CẤU HÌNH NOTION ============

      NOTION_HOST: 'https://www.notion.so',

      // ============ GIAO DIỆN ============

      BLOG_FAVICON: '/favicon.ico',

      // Phông chữ
      FONT_STYLE: 'font-sans',
      FONT_URL: [
            'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
      ],
      FONT_SANS: [
            'Inter',
            '-apple-system',
            'BlinkMacSystemFont',
            'Segoe UI',
            'sans-serif'
      ],
      FONT_SERIF: [
            'Georgia',
            'Times New Roman',
            'serif'
      ],
      FONT_AWESOME: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',

      // ============ TÍNH NĂNG ============

      CAN_COPY: true, // Cho phép copy nội dung
      CUSTOM_RIGHT_CLICK_CONTEXT_MENU: false, // Menu chuột phải mặc định
      CUSTOM_MENU: false,
      CUSTOM_EXTERNAL_JS: [],
      CUSTOM_EXTERNAL_CSS: [],
      LAYOUT_SIDEBAR_REVERSE: false,

      // Facebook (tắt)
      FACEBOOK_APP_ID: '',
      FACEBOOK_PAGE_ID: '',
      FACEBOOK_PAGE: null,
      FACEBOOK_PAGE_TITLE: null,

      // ============ MÃ CODE ============

      PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
      PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',
      PRISM_THEME_PREFIX_PATH: 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.css',
      PRISM_THEME_SWITCH: false,
      PRISM_THEME_LIGHT_PATH: 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism.css',
      PRISM_THEME_DARK_PATH: 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-tomorrow.css',
      CODE_MAC_BAR: false,
      CODE_LINE_NUMBERS: false,
      CODE_COLLAPSE: false,
      CODE_COLLAPSE_EXPAND_DEFAULT: true,

      // ============ TIỆN ÍCH ============

      MERMAID_CDN: 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js',
      QR_CODE_CDN: 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

      BACKGROUND_LIGHT: '#ffffff',
      BACKGROUND_DARK: '#1a1a1a',
      SUB_PATH: '',

      // ============ CHIA SẺ ============

      POST_SHARE_BAR_ENABLE: 'true',
      POSTS_SHARE_SERVICES: 'link,email,facebook,twitter,telegram',

      // ============ BÀI VIẾT ============

      POST_URL_PREFIX: 'article',
      POST_LIST_STYLE: 'page',
      POST_LIST_PREVIEW: 'false',
      POST_PREVIEW_LINES: 12,
      POST_RECOMMEND_COUNT: 6,
      POSTS_PER_PAGE: 12,
      POSTS_SORT_BY: 'notion',

      // ============ TÌM KIẾM (TẮT) ============

      ALGOLIA_APP_ID: null,
      ALGOLIA_ADMIN_APP_KEY: null,
      ALGOLIA_SEARCH_ONLY_APP_KEY: null,
      ALGOLIA_INDEX: null,

      PREVIEW_CATEGORY_COUNT: 16,
      PREVIEW_TAG_COUNT: 16,
      POST_DISABLE_GALLERY_CLICK: false,

      // ============ THỐNG KÊ (ĐƠN GIẢN) ============

      ANALYTICS_VERCEL: false,
      ANALYTICS_BUSUANZI_ENABLE: true, // Hiển thị số lượt xem
      ANALYTICS_BAIDU_ID: '',
      ANALYTICS_CNZZ_ID: '',
      ANALYTICS_GOOGLE_ID: '', // Thêm Google Analytics ID nếu muốn
      ANALYTICS_ACKEE_TRACKER: '',
      ANALYTICS_ACKEE_DATA_SERVER: '',
      ANALYTICS_ACKEE_DOMAIN_ID: '',

      // SEO
      SEO_GOOGLE_SITE_VERIFICATION: '',
      SEO_BAIDU_SITE_VERIFICATION: '',

      // ============ TẮT TẤT CẢ QUẢNG CÁO ============

      ADSENSE_GOOGLE_ID: '',
      ADSENSE_GOOGLE_TEST: false,
      ADSENSE_GOOGLE_SLOT_IN_ARTICLE: '',
      ADSENSE_GOOGLE_SLOT_FLOW: '',
      ADSENSE_GOOGLE_SLOT_NATIVE: '',
      ADSENSE_GOOGLE_SLOT_AUTO: '',
      AD_WWADS_ID: null,
      AD_WWADS_BLOCK_DETECT: false,

      // ============ TẮT TẤT CẢ HIỆU ỨNG ============

      FIREWORKS: false,
      SAKURA: false,
      NEST: false,
      FLUTTERINGRIBBON: false,
      RIBBON: false,
      STARRY_SKY: false,

      // ============ TẮT TẤT CẢ WIDGET ============

      WIDGET_PET: false,
      WIDGET_PET_LINK: '',
      WIDGET_PET_SWITCH_THEME: false,
      CHATBASE_ID: null,
      WEB_WHIZ_ENABLED: false,
      WEB_WHIZ_BASE_URL: '',
      WEB_WHIZ_CHAT_BOT_ID: null,

      // ============ TẮT MUSIC PLAYER ============

      MUSIC_PLAYER: false,
      MUSIC_PLAYER_VISIBLE: false,
      MUSIC_PLAYER_AUTO_PLAY: false,
      MUSIC_PLAYER_LRC_TYPE: '0',
      MUSIC_PLAYER_CDN_URL: '',
      MUSIC_PLAYER_ORDER: 'list',
      MUSIC_PLAYER_AUDIO_LIST: [],
      MUSIC_PLAYER_METING: false,
      MUSIC_PLAYER_METING_SERVER: 'netease',
      MUSIC_PLAYER_METING_ID: '',
      MUSIC_PLAYER_METING_LRC_TYPE: '1',

      // ============ TẮT TẤT CẢ HỆ THỐNG BÌNH LUẬN ============

      COMMENT_ARTALK_SERVER: '',
      COMMENT_ARTALK_JS: '',
      COMMENT_ARTALK_CSS: '',
      COMMENT_TWIKOO_ENV_ID: '',
      COMMENT_TWIKOO_COUNT_ENABLE: false,
      COMMENT_TWIKOO_CDN_URL: '',
      COMMENT_UTTERRANCES_REPO: '',
      COMMENT_GISCUS_REPO: '',
      COMMENT_GISCUS_REPO_ID: '',
      COMMENT_GISCUS_CATEGORY_ID: '',
      COMMENT_GISCUS_MAPPING: 'pathname',
      COMMENT_GISCUS_REACTIONS_ENABLED: '1',
      COMMENT_GISCUS_EMIT_METADATA: '0',
      COMMENT_GISCUS_INPUT_POSITION: 'bottom',
      COMMENT_GISCUS_LANG: 'vi',
      COMMENT_GISCUS_LOADING: 'lazy',
      COMMENT_GISCUS_CROSSORIGIN: 'anonymous',
      COMMENT_CUSDIS_APP_ID: '',
      COMMENT_CUSDIS_HOST: 'https://cusdis.com',
      COMMENT_CUSDIS_SCRIPT_SRC: '/js/cusdis.es.js',
      COMMENT_GITALK_REPO: '',
      COMMENT_GITALK_OWNER: '',
      COMMENT_GITALK_ADMIN: '',
      COMMENT_GITALK_CLIENT_ID: '',
      COMMENT_GITALK_CLIENT_SECRET: '',
      COMMENT_GITALK_DISTRACTION_FREE_MODE: false,
      COMMENT_GITALK_JS_CDN_URL: '',
      COMMENT_GITALK_CSS_CDN_URL: '',
      COMMENT_GITTER_ROOM: '',
      COMMENT_DAO_VOICE_ID: '',
      COMMENT_TIDIO_ID: '',
      COMMENT_VALINE_CDN: '',
      COMMENT_VALINE_APP_ID: '',
      COMMENT_VALINE_APP_KEY: '',
      COMMENT_VALINE_SERVER_URLS: '',
      COMMENT_VALINE_PLACEHOLDER: '',
      COMMENT_WALINE_SERVER_URL: '',
      COMMENT_WALINE_RECENT: false,
      COMMENT_WEBMENTION: {
            ENABLE: false,
            AUTH: '',
            HOSTNAME: '',
            TWITTER_USERNAME: '',
            TOKEN: ''
      },

      // ============ THUỘC TÍNH NOTION ============

      NOTION_PROPERTY_NAME: {
            password: 'password',
            type: 'type',
            type_post: 'Post',
            type_page: 'Page',
            type_notice: 'Notice',
            type_menu: 'Menu',
            type_sub_menu: 'SubMenu',
            title: 'title',
            status: 'status',
            status_publish: 'Published',
            status_invisible: 'Invisible',
            summary: 'summary',
            slug: 'slug',
            category: 'category',
            date: 'date',
            tags: 'tags',
            icon: 'icon'
      },

      // ============ RSS ============

      ENABLE_RSS: true,
      MAILCHIMP_LIST_ID: null,
      MAILCHIMP_API_KEY: null,

      // ============ MẶC ĐỊNH (Bị ghi đè bởi Notion) ============

      AVATAR: '/avatar.svg',
      TITLE: 'Blog của tôi',
      HOME_BANNER_IMAGE: '/bg_image.jpg',
      DESCRIPTION: 'Blog cá nhân',

      // ============ HÌNH ẢNH ============

      IMG_LAZY_LOAD_PLACEHOLDER: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
      IMG_URL_TYPE: 'Notion',
      IMG_SHADOW: false,

      // ============ PHÁT TRIỂN ============

      NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '',
      DEBUG: false,
      ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build',
      isProd: process.env.VERCEL_ENV === 'production',
      VERSION: process.env.NEXT_PUBLIC_VERSION
}

module.exports = BLOG
