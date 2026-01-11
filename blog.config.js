// Lưu ý: process.env.XX là biến môi trường của Vercel. Xem cách cấu hình tại: https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
      // Quan trọng: page_id！！！Sao chép Template từ https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
      NOTION_PAGE_ID:
            process.env.NOTION_PAGE_ID || '02ab3b8678004aa69e9e415905ef32a5',
      PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // Đường dẫn giả tĩnh, khi bật, tất cả URL bài viết sẽ kết thúc bằng .html
      NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // Khoảng thời gian cập nhật cache nội dung (giây); mỗi trang có thời gian tĩnh thuần túy là 5 giây
      THEME: process.env.NEXT_PUBLIC_THEME || 'gitbook', // Giao diện hiện tại, tất cả giao diện được hỗ trợ có thể tìm thấy trong thư mục themes
      THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // Có hiển thị nút chuyển đổi giao diện hay không
      LANG: process.env.NEXT_PUBLIC_LANG || 'vi-VN', // Ví dụ: 'zh-CN','en-US','vi-VN' - xem /lib/lang.js để biết thêm
      SINCE: 2021, // Năm bắt đầu, nếu để trống sẽ sử dụng năm hiện tại
      APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light', // ['light', 'dark', 'auto'] - chế độ sáng, tối, hoặc tự động
      APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6], // Thời gian bắt đầu chế độ tối, false để tắt chuyển đổi tự động

      // Từ phiên bản 3.14.1, lời chào được cấu hình tại đây, phân tách bằng dấu phẩy để hỗ trợ nhiều lời chào với hiệu ứng đánh máy
      GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || 'Hi, I am a programmer, Hi, I am a worker, Hi, I am a jobber, welcome to my blog🎉',

      CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || false, // Hỗ trợ loại Menu, từ phiên bản 3.12.0, các giao diện sẽ dần hỗ trợ cấu hình menu cấp 2 linh hoạt

      AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'NotionNext', // Biệt danh của bạn, ví dụ: tangly1024
      BIO: process.env.NEXT_PUBLIC_BIO || 'An ordinary jobber 🍚', // Giới thiệu tác giả
      LINK: process.env.NEXT_PUBLIC_LINK || 'https://tangly1024.com', // Địa chỉ website
      KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Notion, Blog', // Từ khóa website, phân tách bằng dấu phẩy

      // Liên kết mạng xã hội, có thể để trống nếu không cần
      CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '', // Địa chỉ email, ví dụ: mail@tangly1024.com
      CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || '', // Trang cá nhân Twitter của bạn
      CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || '', // Trang GitHub của bạn, ví dụ: https://github.com/tangly1024
      CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // Địa chỉ Telegram của bạn, ví dụ: https://t.me/tangly_1024
      CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // Trang LinkedIn của bạn
      CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || '', // Địa chỉ Instagram của bạn
      CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || '', // Trang YouTube của bạn

      NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Tên miền Notion, bạn có thể chọn sử dụng tên miền riêng để reverse proxy

      BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico', // Cấu hình favicon blog, mặc định sử dụng /public/favicon.ico, hỗ trợ hình ảnh trực tuyến

      // START ************Phông chữ website*****************

      FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-sans', // ['font-serif','font-sans'] hai lựa chọn, serif và sans-serif
      // Ví dụ Font CSS: https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
      FONT_URL: [
            'https://fonts.googleapis.com/css?family=Bitter&display=swap',
            'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
            'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
      ],
      // Phông chữ Sans serif
      FONT_SANS: [
            '"PingFang SC"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Hiragino Sans GB"',
            '"Microsoft YaHei"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Segoe UI"',
            '"Noto Sans SC"',
            'HarmonyOS_Regular',
            '"Helvetica Neue"',
            'Helvetica',
            '"Source Han Sans SC"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"'
      ],
      // Phông chữ Serif
      FONT_SERIF: [
            'Bitter',
            '"Noto Serif SC"',
            'SimSun',
            '"Times New Roman"',
            'Times',
            'serif',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Apple Color Emoji"'
      ],
      FONT_AWESOME: process.env.NEXT_PUBLIC_FONT_AWESOME_PATH || 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // Địa chỉ biểu tượng font-awesome

      // END ************Phông chữ website*****************
      CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // Có cho phép sao chép nội dung trang hay không, mặc định cho phép
      CUSTOM_RIGHT_CLICK_CONTEXT_MENU: process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // Menu chuột phải tùy chỉnh, ghi đè menu hệ thống

      // Tùy chỉnh script và style bên ngoài
      CUSTOM_EXTERNAL_JS: [''], // Ví dụ: ['http://xx.com/script.js','http://xx.com/script.js']
      CUSTOM_EXTERNAL_CSS: [''], // Ví dụ: ['http://xx.com/style.css','http://xx.com/style.css']

      // Bố cục thanh bên có đảo ngược hay không (trái thành phải, phải thành trái) - Giao diện được hỗ trợ: hexo next medium fukasawa example
      LAYOUT_SIDEBAR_REVERSE: false,

      // Facebook - Đã vô hiệu hóa
      FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '',
      FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '',
      FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null,
      FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null,

      // Music Player - Đã vô hiệu hóa
      MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || false,
      MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || false,
      MUSIC_PLAYER_AUTO_PLAY: process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || false,
      MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0',
      MUSIC_PLAYER_CDN_URL: process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL || '',
      MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'list',
      MUSIC_PLAYER_AUDIO_LIST: [],
      MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false,
      MUSIC_PLAYER_METING_SERVER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease',
      MUSIC_PLAYER_METING_ID: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '',
      MUSIC_PLAYER_METING_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '1',

      // WWAds (Chinese ad network) - Đã vô hiệu hóa
      AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null,
      AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false,

      // Ackee Analytics - Đã vô hiệu hóa
      ANALYTICS_ACKEE_TRACKER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '',
      ANALYTICS_ACKEE_DATA_SERVER: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '',
      ANALYTICS_ACKEE_DOMAIN_ID: process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '',

      // START********Liên quan đến mã code********
      // PrismJs liên quan đến mã code
      PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
      PRISM_JS_AUTO_LOADER: 'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

      // Giao diện mã code @see https://github.com/PrismJS/prism-themes
      PRISM_THEME_PREFIX_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // Giao diện mặc định cho khối mã
      PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // Có bật chuyển đổi giao diện mã sáng/tối hay không
      PRISM_THEME_LIGHT_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // Giao diện chế độ sáng
      PRISM_THEME_DARK_PATH: process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH || 'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // Giao diện chế độ tối

      CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // Hiển thị biểu tượng đỏ vàng xanh của Mac ở góc trên bên trái khối mã
      CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // Có hiển thị số dòng hay không
      CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // Có hỗ trợ thu gọn khối mã hay không
      CODE_COLLAPSE_EXPAND_DEFAULT: process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // Mã thu gọn mặc định ở trạng thái mở rộng

      // END********Liên quan đến mã code********

      // Mermaid biểu đồ CDN
      MERMAID_CDN: process.env.NEXT_PUBLIC_MERMAID_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js',
      // QRCode CDN
      QR_CODE_CDN: process.env.NEXT_PUBLIC_QR_CODE_CDN || 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

      BACKGROUND_LIGHT: '#eeeeee', // Sử dụng giá trị hex, đừng quên '#' ví dụ: #fffefc
      BACKGROUND_DARK: '#000000', // Sử dụng giá trị hex, đừng quên '#'
      SUB_PATH: '', // Để trống trừ khi bạn muốn triển khai trong một thư mục

      POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // Chức năng chia sẻ bài viết, sẽ hiển thị thanh chia sẻ ở cuối
      POSTS_SHARE_SERVICES: process.env.NEXT_PUBLIC_POST_SHARE_SERVICES || 'link,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // Dịch vụ chia sẻ, hiển thị theo thứ tự, phân tách bằng dấu phẩy
      // Tất cả dịch vụ chia sẻ được hỗ trợ: link(sao chép liên kết),email(email),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

      POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX || 'article',
      // Tiền tố đường dẫn mặc định cho bài viết loại POST, ví dụ: đường dẫn mặc định loại POST là /article/[slug]
      // Nếu cấu hình này là '' trống, bài viết sẽ không có tiền tố đường dẫn
      // Hỗ trợ tương tự WP có thể tùy chỉnh định dạng liên kết bài viết: https://wordpress.org/documentation/article/customize-permalinks/, hiện tại chỉ triển khai %year%/%month%/%day%
      // Ví dụ: nếu muốn liên kết thành tiền tố article + timestamp, có thể thay đổi thành: 'article/%year%/%month%/%day%'

      POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'page', // ['page','scroll'] Kiểu danh sách bài viết: phân trang theo số trang, tải cuộn trang đơn
      POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', // Có tải xem trước bài viết trong danh sách hay không
      POST_PREVIEW_LINES: 12, // Số dòng xem trước blog
      POST_RECOMMEND_COUNT: 6, // Số lượng bài viết đề xuất
      POSTS_PER_PAGE: 12, // Số bài viết mỗi trang
      POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // Cách sắp xếp: 'date' theo thời gian, 'notion' do notion kiểm soát

      ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // Xem tại đây: https://dashboard.algolia.com/account/api-keys/
      ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // KEY của bảng quản trị, không để lộ trong mã, xem tại đây: https://dashboard.algolia.com/account/api-keys/
      ALGOLIA_SEARCH_ONLY_APP_KEY: process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // KEY dùng cho tìm kiếm phía client
      ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // Tạo một index trong Algolia để làm cơ sở dữ liệu

      PREVIEW_CATEGORY_COUNT: 16, // Số lượng danh mục tối đa hiển thị trên trang chủ, 0 là không giới hạn
      PREVIEW_TAG_COUNT: 16, // Số lượng thẻ tối đa hiển thị trên trang chủ, 0 là không giới hạn

      POST_DISABLE_GALLERY_CLICK: process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // Vô hiệu hóa nhấp chuột trong chế độ xem thư viện

      // Tùy chỉnh tên trường cơ sở dữ liệu notion
      NOTION_PROPERTY_NAME: {
            password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
            type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // Loại bài viết
            type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // Khi loại bài viết giống giá trị này, là bài blog
            type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // Khi loại bài viết giống giá trị này, là trang đơn
            type_notice:
                  process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // Khi loại bài viết giống giá trị này, là thông báo
            type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // Khi loại bài viết giống giá trị này, là menu
            type_sub_menu:
                  process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // Khi loại bài viết giống giá trị này, là menu con
            title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // Tiêu đề bài viết
            status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
            status_publish:
                  process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // Khi giá trị trạng thái giống như này là xuất bản
            status_invisible:
                  process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // Khi giá trị trạng thái giống như này là xuất bản ẩn
            summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
            slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
            category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
            date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
            tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
            icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon'
      },

      // RSS đăng ký
      ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || true, // Có bật chức năng đăng ký RSS hay không
      MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // Bật đăng ký email mailchimp - ID danh sách khách hàng
      MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // Bật đăng ký email mailchimp - APIkey

      // Cấu hình đã lỗi thời
      AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // Ảnh đại diện tác giả, bị ghi đè bởi ICON trong notion
      TITLE: process.env.NEXT_PUBLIC_TITLE || 'NotionNext BLOG', // Tiêu đề trang web, bị ghi đè bởi tiêu đề trang trong notion
      HOME_BANNER_IMAGE:
            process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // Hình nền lớn trang chủ, bị ghi đè bởi ảnh bìa trong notion
      DESCRIPTION:
            process.env.NEXT_PUBLIC_DESCRIPTION || 'Đây là một trang web được tạo bởi NotionNext', // Mô tả trang web, bị ghi đè bởi mô tả trang trong notion

      // Hình ảnh website
      IMG_LAZY_LOAD_PLACEHOLDER: process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER || 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // Địa chỉ hình ảnh placeholder lazy load, hỗ trợ base64 hoặc url
      IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // Cấu hình này đã không còn hiệu lực, vui lòng không sử dụng
      IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // Hình ảnh bài viết có tự động thêm bóng đổ hay không

      // Thống kê và phân tích
      ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || false, // Thống kê Vercel
      ANALYTICS_BUSUANZI_ENABLE: process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // Hiển thị số lượt đọc và truy cập
      ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // Baidu Analytics ID
      ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // CNZZ Analytics ID
      ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // Google Analytics ID

      // SEO
      SEO_GOOGLE_SITE_VERIFICATION: process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Google site verification
      SEO_BAIDU_SITE_VERIFICATION: process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Baidu site verification

      // Quảng cáo Google AdSense
      ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // Google AdSense ID
      ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // Chế độ test Google AdSense
      ADSENSE_GOOGLE_SLOT_IN_ARTICLE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '', // Slot quảng cáo trong bài viết
      ADSENSE_GOOGLE_SLOT_FLOW: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '', // Slot quảng cáo luồng
      ADSENSE_GOOGLE_SLOT_NATIVE: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '', // Slot quảng cáo native
      ADSENSE_GOOGLE_SLOT_AUTO: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '', // Slot quảng cáo tự động

      // Hiệu ứng động - Tất cả đã bị vô hiệu hóa
      FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || false,
      SAKURA: process.env.NEXT_PUBLIC_SAKURA || false,
      NEST: process.env.NEXT_PUBLIC_NEST || false,
      FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false,
      RIBBON: process.env.NEXT_PUBLIC_RIBBON || false,
      STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false,

      // Widget - Tất cả đã bị vô hiệu hóa
      WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || false,
      WIDGET_PET_LINK: process.env.NEXT_PUBLIC_WIDGET_PET_LINK || '',
      WIDGET_PET_SWITCH_THEME: process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false,

      // Chatbot AI - Tất cả đã bị vô hiệu hóa
      CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
      WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false,
      WEB_WHIZ_BASE_URL: process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || '',
      WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null,

      // Hệ thống bình luận - Tất cả đã bị vô hiệu hóa
      COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '',
      COMMENT_ARTALK_JS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS || '',
      COMMENT_ARTALK_CSS: process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS || '',

      COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || '',
      COMMENT_TWIKOO_COUNT_ENABLE: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false,
      COMMENT_TWIKOO_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL || '',

      COMMENT_UTTERRANCES_REPO: process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '',

      COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '',
      COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '',
      COMMENT_GISCUS_CATEGORY_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '',
      COMMENT_GISCUS_MAPPING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname',
      COMMENT_GISCUS_REACTIONS_ENABLED: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1',
      COMMENT_GISCUS_EMIT_METADATA: process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0',
      COMMENT_GISCUS_INPUT_POSITION: process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom',
      COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'vi',
      COMMENT_GISCUS_LOADING: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy',
      COMMENT_GISCUS_CROSSORIGIN: process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous',

      COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || '',
      COMMENT_CUSDIS_HOST: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com',
      COMMENT_CUSDIS_SCRIPT_SRC: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC || '/js/cusdis.es.js',

      COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '',
      COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '',
      COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '',
      COMMENT_GITALK_CLIENT_ID: process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '',
      COMMENT_GITALK_CLIENT_SECRET: process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '',
      COMMENT_GITALK_DISTRACTION_FREE_MODE: false,
      COMMENT_GITALK_JS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL || '',
      COMMENT_GITALK_CSS_CDN_URL: process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL || '',

      COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '',
      COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '',
      COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '',

      COMMENT_VALINE_CDN: process.env.NEXT_PUBLIC_VALINE_CDN || '',
      COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '',
      COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
      COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '',
      COMMENT_VALINE_PLACEHOLDER: process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '',

      COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '',
      COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false,


      // Hệ thống bình luận - Tất cả đã bị vô hiệu hóa
      COMMENT_WEBMENTION: {
            ENABLE: false,
            AUTH: '',
            HOSTNAME: '',
            TWITTER_USERNAME: '',
            TOKEN: ''
      },

      // Liên quan đến phát triển
      NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Hữu ích nếu bạn không muốn công khai cơ sở dữ liệu của mình
      DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // Có hiển thị nút debug hay không
      ENABLE_CACHE: process.env.ENABLE_CACHE || process.env.npm_lifecycle_event === 'build', // Cache được bật có chọn lọc trong quá trình phát triển debug và đóng gói
      isProd: process.env.VERCEL_ENV === 'production', // Phân biệt giữa môi trường phát triển và sản xuất
      VERSION: process.env.NEXT_PUBLIC_VERSION // Số phiên bản
}

module.exports = BLOG
