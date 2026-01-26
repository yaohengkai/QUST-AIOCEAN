---
title: "海洋开放数据中心"
# commentable: true
date: 2023-10-24
type: landing

design:
  spacing: "5rem"

sections:
# 搜索块
  - block: search-hero                             #【必选】固定值 search-hero（模块类型）
    content:                                        #【可选】内容配置
      badge:                                        #【可选】徽章
        text: "🔥 欢迎使用海洋生态数据"                           #【可选】任意字符串；支持 Markdown
        show_pulse: true                           #【可选】true/false；是否显示脉冲小圆点
      title: "海洋开放数据中心"                          #【可选】任意字符串；支持 Markdown/emoji；==内容== 会变成渐变高亮
      subtitle: "Oceanographic Open Data Center"                           #【可选】任意字符串；支持 Markdown/emoji
      search_placeholder: "输入数据关键词：如海域、数据类型、变量等"   #【可选】任意字符串；搜索框占位；默认此值

      suggestions:                                  #【可选】热门搜索词；字符串或数组
        - "西太平洋"
        - "黄海"
        - "东海"
        - "海表温度"
        - "海表盐度"
        - "次表层溶解氧"
        - "中尺度涡"
      # suggestions: "Single suggestion"            #【可选】也可用单个字符串

      stats:                                        #【可选】统计数据；对象或数组
        - value: "20Tb+"                           #【必选】任意字符串/数字；展示大数字
          label: "数据总量"                         #【必选】任意字符串；说明文案
        - value: "30+"                              #【必选】同上
          label: "数据集数量"                     #【必选】同上
        - value: "南海/东海/黑潮"                              #【必选】同上
          label: "覆盖海域"                     #【必选】同上
        # - value: "再分析/合成数据"                              #【必选】同上
        #   label: "数据类型"                     #【必选】同上
      # stats: { value: "100+", label: "Topics" }   #【可选】也可用单个对象

    #   design:
    #     background:
    #       gradient_mesh:
    #         enable: true
    #         style: "orbs"       # orbs, waves, dots, grid
    #         animation: "pulse"   # pulse, float, rotate, none
    #         # intensity: "subtle"  # subtle, medium, bold
    #         colors:
    #           - "primary-500/20"
    #           - "primary-600/20"
    #     spacing:
    #       padding: ["0", "0", "0", "0"]

# 类别块
# --------------------------------------最新论文发表--------------------------------------------
  - block: portfolio
    id: recent-papers
    content:
      title: " 海洋生态数据集"
      subtitle: ""
      count: 0
      filters:
        folders:
          - datasets  # Or: research, portfolio, work, teaching, etc.
      buttons:
        - name: All
          tag: '*'
        - name: 物理海洋
          tag: 物理海洋学
        - name: 海洋生态
          tag: 海洋生态
        - name: 海洋遥感
          tag: 海洋遥感
      default_button_index: 2
      archive:
        # Auto-shown if more items exist than displayed
        Optionally customize:
        enable: true  # Explicitly hide
        link: "/datasets/"  # Custom URL
        text: "浏览更多"  # Custom text
    design:
      columns: 3
      fallback_icon: code-bracket  # Or: academic-cap, paint-brush, camera, etc.
---

