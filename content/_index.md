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
# --------------------------------------中心简介--------------------------------------------
  - block: markdown
    id: intro
    content:
      title: "中心简介"
      subtitle: "More details below"
      text: |
        人工智能海洋技术场景化应用山东省工程研究中心以海洋科学理论和人工智能技术为基础，围绕国家、省市海洋发展战略和市场急需、行业关键的共性技术及“卡脖子”问题，遵循“基础理论研究->关键技术突破->智能算法设计->服务平台构建->典型场景应用”的研发路线，开展海洋人工智能与大数据挖掘技术的科学研究与示范应用。

        <style>
        .bili-video {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }
        .bili-video iframe {
          width: 100%;
          aspect-ratio: 16 / 9;
          height: auto;
          display: block;
        }
        @media (min-width: 1024px) {
          .bili-video {
            max-width: 65ch;
          }
        }
        </style>
        <div class="bili-video">
          <iframe
            src="https://player.bilibili.com/player.html?bvid=BV1CCziBTEwU&cid=35631334796&page=1&high_quality=1&danmaku=0"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
            allow="fullscreen; encrypted-media"
            referrerpolicy="no-referrer-when-downgrade"
            loading="lazy"></iframe>
        </div>
    design:
      columns: "1"
      # background:
      #   color: "white"

# --------------------------------------大事记--------------------------------------------
  - block: resume-experience                       #【必选】固定值 resume-experience（模块类型）
    content:                                        #【可选】内容配置
      text: "简短说明"                                #【可选】任意字符串；支持 Markdown/emoji
      username: "admin"                                #【可选】作者标识；默认 "me"；用于读取作者档案数据

  - block: research-areas
    id: journey
    content:
      title: 大事记
      subtitle: Our Journey of Discovery
      items:
        - name: 智能控制与机器视觉技术研究中心 (2015-2018)
          description: Established core ML research
          icon: hero/academic-cap
        - name: 数学与海洋信息科学研究中心 (2015-2018)
          description: Established core ML research
          icon: hero/academic-cap
        - name: 数据科学与信息技术研究中心 (2018-2021)
          description: Added biomedical applications
          icon: hero/beaker
        - name: 青岛科技大学数学与交叉科学研究院 (2021-Present)
          description: AI for scientific discovery
          icon: hero/sparkles
        - name: 青岛科技大学大数据研究中心 (2015-2018)
          description: Established core ML research
          icon: hero/academic-cap
        - name: 青岛市人工智能海洋技术创新中心 (2018-2021)
          description: Added biomedical applications
          icon: hero/beaker
        - name: 人工智能海洋技术场景化应用山东省工程研究中心 (2021-Present)
          description: AI for scientific discovery
          icon: hero/sparkles
    design:
      layout: timeline
# --------------------------------------合作伙伴--------------------------------------------
  - block: logos                                   #【必选】固定值 logos（模块类型）
    id: partners
    content:                                        #【可选】内容配置
      title: "合作伙伴"                               #【可选】任意字符串；支持 Markdown/emoji
      subtitle: "Trusted by"                        #【可选】任意字符串；支持 Markdown/emoji
      # text: "简短说明"                                 #【可选】任意字符串；支持 Markdown/emoji

      logos:                                        #【可选】logo 数组；优先于 logo_folder
        - name: "IOCAS"                         #【可选】任意字符串；用于 alt/title/tooltip
          image: "logos/IOCAS.svg"                      #【可选】图片文件；位于 assets/media/ 下
          url: "https://example.com"                #【可选】任意链接
          external: true                            #【可选】true/false；true=新窗口
          # description: "合作说明"                     #【可选】任意字符串；grid 模式 hover 提示
        - name: "中国海洋大学"                         #【可选】同上
          image: "logos/OUC-trans.png"                      #【可选】同上
          url: "https://www.ouc.edu.cn"                       #【可选】同上
          external: true                         #【可选】同上
          # description: "..."                      #【可选】同上
        - name: "自然资源部第一海洋研究所"                         #【可选】同上
          image: "logos/FIO.jpg"                      #【可选】同上
          url: "https://www.fio.org.cn"                       #【可选】同上
          external: true                         #【可选】同上
          # description: "..."                      #【可选】同上
        - name: "青岛阅海信息服务有限公司"                         #【可选】同上
          image: "logos/yuehai.png"                      #【可选】同上
          url: "http://www.gg.oceanread.com/index.html"                       #【可选】同上
          external: true                         #【可选】同上
          # description: "..."                      #【可选】同上

      logo_folder: "logos"                          #【可选】从 assets/media/<folder> 读取图片；与 logos 二选一
      cta:                                          #【可选】底部 CTA 按钮
        text: "欢迎与我们合作交流"                           #【必选】任意字符串
        url: "/contact/"                           #【必选】任意链接（站内/站外）
        icon: "hero/arrow-right"                    #【可选】任意图标名；由 get_icon 支持

    design:                                         #【可选】样式配置
      display_mode: "grid"                          #【可选】grid/carousel/marquee；默认 grid
      show_pattern: true                            #【可选】true/false；背景浅纹理
# --------------------------------------研究方向--------------------------------------------
  - block: research-areas                          #【必选】固定值 research-areas（模块类型）
    id: research-areas
    content:                                        #【可选】内容配置
      title: "研究方向"                               #【可选】任意字符串；支持 Markdown/emoji
      subtitle: "Research Focus"                    #【可选】任意字符串；支持 Markdown/emoji
      text: "简要说明"                                 #【可选】任意字符串；支持 Markdown/emoji

      items:                                        #【必选】条目数组；为空则无内容
        - name: "方向1名称"                            #【必选】任意字符串
          description: "方向描述"                     #【必选】任意字符串
          # image: "areas/ai.jpg"                     #【可选】图片文件名；位于 assets/media/
          # icon: "hero/brain"                        #【可选】任意图标名；由 get_icon 支持
          gradient: "from-primary-400 to-secondary-400" #【可选】任意 Tailwind 类；卡片/形状背景渐变
          status: "active"                          #【可选】状态：active/emerging/planning（影响徽章颜色）
          url: "/research/ai/"                      #【可选】标题链接
          topics: ["AI","NLP","Vision"]             #【可选】字符串数组；最多展示前 3 个
          team_size: "10"              #【可选】任意字符串；显示为 team 统计
          publications: "25 papers"                #【可选】任意字符串；显示为 papers 统计
          funding: "100 万"                            #【可选】任意字符串；显示为 funding 统计
          cta:                                      #【可选】卡片内按钮
            text: "了解更多"                          #【必选】任意字符串
            url: "/research/ai/"                    #【必选】任意链接（站内/站外）
        - name: "方向2名称"                            #【必选】任意字符串
          description: "方向描述"                     #【必选】任意字符串
          # image: "areas/ai.jpg"                     #【可选】图片文件名；位于 assets/media/
          # icon: "hero/brain"                        #【可选】任意图标名；由 get_icon 支持
          gradient: "from-primary-400 to-secondary-400" #【可选】任意 Tailwind 类；卡片/形状背景渐变
          status: "active"                          #【可选】状态：active/emerging/planning（影响徽章颜色）
          url: "/research/ai/"                      #【可选】标题链接
          topics: ["AI","NLP","Vision"]             #【可选】字符串数组；最多展示前 3 个
          team_size: "10"              #【可选】任意字符串；显示为 team 统计
          publications: "25 papers"                #【可选】任意字符串；显示为 papers 统计
          funding: "100 万"                            #【可选】任意字符串；显示为 funding 统计
          cta:                                      #【可选】卡片内按钮
            text: "了解更多"                          #【必选】任意字符串
            url: "/research/ai/"                    #【必选】任意链接（站内/站外）
        - name: "方向3名称"                            #【必选】任意字符串
          description: "方向描述"                     #【必选】任意字符串
          # image: "areas/ai.jpg"                     #【可选】图片文件名；位于 assets/media/
          # icon: "hero/brain"                        #【可选】任意图标名；由 get_icon 支持
          gradient: "from-primary-400 to-secondary-400" #【可选】任意 Tailwind 类；卡片/形状背景渐变
          status: "active"                          #【可选】状态：active/emerging/planning（影响徽章颜色）
          url: "/research/ai/"                      #【可选】标题链接
          topics: ["AI","NLP","Vision"]             #【可选】字符串数组；最多展示前 3 个
          team_size: "10"              #【可选】任意字符串；显示为 team 统计
          publications: "25 papers"                #【可选】任意字符串；显示为 papers 统计
          funding: "100 万"                            #【可选】任意字符串；显示为 funding 统计
          cta:                                      #【可选】卡片内按钮
            text: "了解更多"                          #【必选】任意字符串
            url: "/research/ai/"                    #【必选】任意链接（站内/站外）

      cta:                                          #【可选】模块底部全局按钮
        text: "查看全部方向"                           #【必选】任意字符串
        url: "/research/"                           #【必选】任意链接
        icon: "hero/arrow-right"                    #【可选】任意图标名

    design:                                         #【可选】样式配置
      layout: "cards"                               #【可选】cards/hexagon/timeline；默认 cards

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
