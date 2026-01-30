---
# Leave the homepage title empty to use the site title
title: ''
summary: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  # spacing: '6rem'

sections:
# --------------------------------------头图轮播--------------------------------------------
  - block: markdown
    id: hero-carousel
    content:
      text: |
        {{< hero_carousel >}}
        images:
          - media/hero/hero-1.png
          - media/hero/hero-2.png
          - media/hero/hero-3.png
        titles:
          - 智能海洋 · 智汇未来
          - 海洋数据 · 科学发现
          - 技术突破 · 应用落地
        subtitles:
          - 人工智能海洋技术场景化应用
          - 从观测到决策的全链路创新
          - 服务海洋产业与城市发展
        interval: 3000
        {{< /hero_carousel >}}
# --------------------------------------科研动态--------------------------------------------
  - block: collection                               #【必选】固定值 collection（模块类型）
    content:                                         #【可选】内容配置
      title: "科研动态"                                   #【可选】任意字符串；支持 Markdown/emoji；为空不显示标题
      # text: "集合出版的文章、承接的项目、申报的专利、获得的奖励"                                #【可选】任意字符串；支持 Markdown/emoji；为空可省略
      offset: 0                                      #【可选】>=0 整数；跳过前 N 条；默认 0
      count: 3                                       #【可选】整数；0=近似无限(内部65535)；未填默认 5
      sort_by: "Date"                                #【可选】内置字段(大写：Date/Title/Lastmod/PublishDate/Weight...)或自定义(小写自动转 Params.xxx)
      sort_ascending: false                          #【可选】true/false；升序；默认 false
      # order: asc                                   #【可选】asc/desc；asc 等效 sort_ascending=true

    #   page_type: "publications"                       #【可选】Type 过滤；任意 Section/Type 名(如 blog/publication/event)

      filters:                                       #【可选】过滤器集合
        # kinds: ["page"]                              #【可选】Kind 列表：page/home/section/taxonomy/term...；默认 ["page"]
        folders: [publications,projects,patents]                    #【可选】Section 列表；任意文件夹名数组
        # tags: ["AI","NLP"]                           #【可选】多 tag 交集；任意标签数组；有效时归档页指向第一个 tag
        # tag: "AI"                                  #【可选】单 tag；任意标签名；与 tags 互斥更清晰
        # category: "ML"                             #【可选】单 category；任意分类名
        # publication_type: "2"                      #【可选】publication_types 下类型；任意字符串/编号
        # exclude_publication_type: "1"              #【可选】排除某 publication_type；任意字符串/编号
        # author: "yao"                              #【可选】authors 下作者 slug；任意字符串
        # featured_only: true                        #【可选】true/false；仅显示 Params.featured=true
        # exclude_featured: true                     #【可选】true/false；排除 Params.featured=true
        # exclude_past: true                         #【可选】true/false；排除 Date < now
        # exclude_future: true                       #【可选】true/false；排除 Date >= now

      archive:                                       #【可选】归档链接
        enable: true                                 #【可选】true/false；未填时默认：总数>count 自动显示
        link: "/publications/"                       #【可选】任意站内链接；不填则用归档页 Permalink
        text: "查看全部"                               #【可选】任意字符串；不填则按类型 i18n 自动文案

    design:                                          #【可选】展示样式
      view: "article-grid"                                   #【可选】card/date-title-summary/citation/article-grid；不存在则回退 card
      columns: 3                                     #【可选】正整数；列数；默认 2
      fill_image: true                               #【可选】true/false；图片是否铺满
      show_date: true                                #【可选】true/false；显示日期
      show_read_time: false                           #【可选】true/false；显示阅读时长
      show_read_more: false                           #【可选】true/false；显示 Read more
# --------------------------------------学术活动--------------------------------------------
  - block: collection                               #【必选】固定值 collection（模块类型）
    content:                                         #【可选】内容配置
      title: "学术活动"                                   #【可选】任意字符串；支持 Markdown/emoji；为空不显示标题
      # text: "集合出版的文章、承接的项目、申报的专利、获得的奖励"                                #【可选】任意字符串；支持 Markdown/emoji；为空可省略
      offset: 0                                      #【可选】>=0 整数；跳过前 N 条；默认 0
      count: 20                                       #【可选】整数；0=近似无限(内部65535)；未填默认 5
      sort_by: "Date"                                #【可选】内置字段(大写：Date/Title/Lastmod/PublishDate/Weight...)或自定义(小写自动转 Params.xxx)
      sort_ascending: false                          #【可选】true/false；升序；默认 false
      # order: asc                                   #【可选】asc/desc；asc 等效 sort_ascending=true

      page_type: "events"                       #【可选】Type 过滤；任意 Section/Type 名(如 blog/publication/event)

      filters:                                       #【可选】过滤器集合
        # kinds: ["page"]                              #【可选】Kind 列表：page/home/section/taxonomy/term...；默认 ["page"]
        folders: [news-activity]                    #【可选】Section 列表；任意文件夹名数组
        # tags: ["AI","NLP"]                           #【可选】多 tag 交集；任意标签数组；有效时归档页指向第一个 tag
        # tag: "AI"                                  #【可选】单 tag；任意标签名；与 tags 互斥更清晰
        # category: "ML"                             #【可选】单 category；任意分类名
        # publication_type: "2"                      #【可选】publication_types 下类型；任意字符串/编号
        # exclude_publication_type: "1"              #【可选】排除某 publication_type；任意字符串/编号
        # author: "yao"                              #【可选】authors 下作者 slug；任意字符串
        # featured_only: true                        #【可选】true/false；仅显示 Params.featured=true
        # exclude_featured: true                     #【可选】true/false；排除 Params.featured=true
        # exclude_past: true                         #【可选】true/false；排除 Date < now
        # exclude_future: true                       #【可选】true/false；排除 Date >= now

      archive:                                       #【可选】归档链接
        enable: true                                 #【可选】true/false；未填时默认：总数>count 自动显示
        link: "/events/"                       #【可选】任意站内链接；不填则用归档页 Permalink
        text: "查看全部"                               #【可选】任意字符串；不填则按类型 i18n 自动文案

    design:                                          #【可选】展示样式
      view: "article-grid"                                   #【可选】card/date-title-summary/citation/article-grid；不存在则回退 card
      columns: 3                                     #【可选】正整数；列数；默认 2
      fill_image: true                               #【可选】true/false；图片是否铺满
      show_date: true                                #【可选】true/false；显示日期
      show_read_time: false                           #【可选】true/false；显示阅读时长
      show_read_more: false                           #【可选】true/false；显示 Read more
# --------------------------------------新闻动态--------------------------------------------
  - block: collection                               #【必选】固定值 collection（模块类型）
    content:                                         #【可选】内容配置
      title: "新闻动态"                                   #【可选】任意字符串；支持 Markdown/emoji；为空不显示标题
      # text: "News"                                #【可选】任意字符串；支持 Markdown/emoji；为空可省略
      offset: 0                                      #【可选】>=0 整数；跳过前 N 条；默认 0
      count: 5                                       #【可选】整数；0=近似无限(内部65535)；未填默认 5
      sort_by: "Date"                                #【可选】内置字段(大写：Date/Title/Lastmod/PublishDate/Weight...)或自定义(小写自动转 Params.xxx)
      sort_ascending: false                          #【可选】true/false；升序；默认 false
      # order: asc                                   #【可选】asc/desc；asc 等效 sort_ascending=true

      filters:                                       #【可选】过滤器集合
        # kinds: ["page"]                              #【可选】Kind 列表：page/home/section/taxonomy/term...；默认 ["page"]
        folders: [news-activity]                    #【可选】Section 列表；任意文件夹名数组
        tag: "news"                                #【可选】单 tag；任意标签名；与 tags 互斥更清晰
        # tags: ["AI","NLP"]                           #【可选】多 tag 交集；任意标签数组；有效时归档页指向第一个 tag
        # tag: "AI"                                  #【可选】单 tag；任意标签名；与 tags 互斥更清晰
        # category: "ML"                             #【可选】单 category；任意分类名
        # publication_type: "2"                      #【可选】publication_types 下类型；任意字符串/编号
        # exclude_publication_type: "1"              #【可选】排除某 publication_type；任意字符串/编号
        # author: "yao"                              #【可选】authors 下作者 slug；任意字符串
        # featured_only: true                        #【可选】true/false；仅显示 Params.featured=true
        # exclude_featured: true                     #【可选】true/false；排除 Params.featured=true
        # exclude_past: true                         #【可选】true/false；排除 Date < now
        # exclude_future: true                       #【可选】true/false；排除 Date >= now

      archive:                                       #【可选】归档链接
        enable: true                                 #【可选】true/false；未填时默认：总数>count 自动显示
        link: "/news-activity/news/"         #【可选】任意站内链接；不填则用归档页 Permalink
        text: "查看全部"                               #【可选】任意字符串；不填则按类型 i18n 自动文案

    design:                                          #【可选】展示样式
      view: "article-grid"                                   #【可选】card/date-title-summary/citation/article-grid；不存在则回退 card
      columns: 3                                     #【可选】正整数；列数；默认 2
      fill_image: true                               #【可选】true/false；图片是否铺满
      show_date: true                                #【可选】true/false；显示日期
      show_read_time: false                           #【可选】true/false；显示阅读时长
      show_read_more: false                           #【可选】true/false；显示 Read more

# --------------------------------------最新论文发表--------------------------------------------
  - block: portfolio
    id: recent-papers
    content:
      title: " 最新论文发表"
      subtitle: "A selection of recent papers"
      count: 3
      filters:
        folders:
          - publications  # Or: research, portfolio, work, teaching, etc.
      buttons:
        - name: All
          tag: '*'
        - name: 物理海洋
          tag: Physical Oceanography
        - name: 海洋化学
          tag: Large Language Models
        - name: 海洋生态
          tag: Research
        - name: 流体模拟
          tag: Data
      default_button_index: 0
      archive:
        # Auto-shown if more items exist than displayed
        Optionally customize:
        enable: true  # Explicitly hide
        link: "/publications/"  # Custom URL
        text: "浏览更多"  # Custom text
    design:
      columns: 3
      fallback_icon: code-bracket  # Or: academic-cap, paint-brush, camera, etc.
# --------------------------------------最新项目申报--------------------------------------------
  - block: portfolio
    id: recent-projects
    content:
      title: " 最新项目申报"
      subtitle: "A selection of recent projects"
      count: 3
      filters:
        folders:
          - projects  # Or: research, portfolio, work, teaching, etc.
      buttons:
        - name: All
          tag: '*'
        - name: 物理海洋
          tag: Physical Oceanography
        - name: 海洋化学
          tag: Large Language Models
        - name: 海洋生态
          tag: Research
        - name: 流体模拟
          tag: Data
      default_button_index: 0
      archive:
        # Auto-shown if more items exist than displayed
        Optionally customize:
        enable: true  # Explicitly hide
        link: "/projects/"  # Custom URL
        text: "浏览更多"  # Custom text
    design:
      columns: 3
      fallback_icon: code-bracket  # Or: academic-cap, paint-brush, camera, etc.

---
