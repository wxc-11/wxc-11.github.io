export default defineNuxtPlugin((nuxtApp) => {
  // 简单的 i18n 实现，不依赖外部库
  const messages = {
    en: {
    header: {
      title: 'Portfolio'
    },
    hero: {
      title: 'Hi, I\'m WANG XICHEN',
      description: 'I\'m a programmer in Hong Kong and currently seeking for job opportunities in Japan. Here are some of my projects done in college.'
    },
    projects: {
      title: 'School Projects',
      minecraftBlockly: 'Minecraft Blockly Project',
      minecraftBlocklyDesc: 'Game Plugin',
      minecraftBlocklyDetail: 'A plugin for Minecraft game using blockly programming to control a bot do the tasks which have been programed.',
      blackBoardSystem: 'BlackBoard System',
      blackBoardSystemDesc: 'Web Application',
      blackBoardSystemDetail: 'A web-based blackboard system designed for educational purposes, featuring real-time collaboration and interactive elements.',
      webGameProject: 'Web Game Project',
      webGameProjectDesc: 'Web Game',
      webGameProjectDetail: 'An interactive web game developed with modern web technologies, featuring engaging gameplay and responsive design.',
      viewProject: 'View project',
      backToProjects: 'Back to Projects',
      skills: 'Skills',
      features: 'Features',
      viewOnNotion: 'View on Notion',
      minecraftDate: 'September 1, 2021 → April 1, 2022',
      blackboardDate: 'September 1, 2020 → December 31, 2020',
      webgameDate: 'February 1, 2020 → May 2, 2020',
      minecraftSkills: ['JavaScript', 'Node.js', 'Mineflayer Library'],
      minecraftFeatures: [
        'Use Google Blockly APIs to program tasks for the bot (collect 2 stones for example)',
        'Enter collect message in the game and the bot starts to collecting the 2 stones',
        'The collect task is completed',
        'Other actions',
        'Tutorials provided'
      ],
      blackboardFeatures: [
        'User authentication and role-based access control for teachers and students.',
        'Students take quiz.',
        'Assignment submission and grading system with feedback capabilities.',
        'Teachers edit quiz.'
      ],
      webgameFeatures: [
        'Responsive design that works across different screen sizes and devices.',
        'An interactive web game developed with modern web technologies, featuring engaging gameplay and intuitive controls.'
      ]
    },
      skills: {
        title: 'Skills'
      },
      contact: {
        title: 'Contact',
        description: 'If you have any questions or want to work together, feel free to get in touch.',
        email: '28xichen.wang@gmail.com'
      },
      footer: {
        copyright: ''
      },
      languages: {
        en: 'English',
        ja: '日本語'
      }
    },
    ja: {
    header: {
      title: 'パーポートフォリオ'
    },
    hero: {
      title: 'こんにちは、オウ キシンです',
      description: '香港出身のプログラマーとして、現在日本での就職を目指しております。以下は、大学在学中に取り組んだ主なプロジェクトです。'
    },
    projects: {
      title: '学校プロジェクト',
      minecraftBlockly: 'Minecraft Blockly プロジェクト',
      minecraftBlocklyDesc: 'ゲームプラグイン',
      minecraftBlocklyDetail: 'Blockly プログラミングを使用して、プログラムされたタスクを実行するボットを制御する Minecraft ゲーム用プラグイン。',
      blackBoardSystem: 'ブラックボードシステム',
      blackBoardSystemDesc: 'Web アプリケーション',
      blackBoardSystemDetail: 'リアルタイムコラボレーションとインタラクティブな要素を備えた教育目的のために設計された Web ベースのブラックボードシステム。',
      webGameProject: 'Web ゲームプロジェクト',
      webGameProjectDesc: 'Web ゲーム',
      webGameProjectDetail: '現代の Web 技術を使用して開発されたインタラクティブな Web ゲームで、魅力的なゲームプレイとレスポンシブデザインを備えています。',
      dateRange: '{start} → {end}',
      viewProject: 'プロジェクトを表示',
      backToProjects: 'プロジェクトに戻る',
      skills: 'スキル',
      features: '機能',
      viewOnNotion: 'Notionで表示',
      minecraftDate: '2021年9月1日 → 2022年4月1日',
      blackboardDate: '2020年9月1日 → 2020年12月31日',
      webgameDate: '2020年2月1日 → 2020年5月2日',
      minecraftSkills: ['JavaScript', 'Node.js', 'Mineflayer ライブラリ'],
      minecraftFeatures: [
        'Google Blockly API を使用してボットのタスクをプログラムする（たとえば、2つの石を集める）',
        'ゲーム内に収集メッセージを入力すると、ボットが 2つの石の収集を開始します',
        '収集タスクが完了しました',
        'その他のアクション',
        'チュートリアルを提供'
      ],
      blackboardFeatures: [
        '教師と学生のためのユーザー認証とロールベースのアクセス制御。',
        '学生がクイズを受験できる機能を実装。',
        'フィードバック機能を備えた課題提出・採点システムを実装。',
        '教師がクイズの内容を編集できる機能を実装。',
      ],
      webgameFeatures: [
        'さまざまな画面サイズやデバイスで動作するレスポンシブデザイン。',
        '最新のウェブ技術を使用して開発されたインタラクティブなウェブゲームで、魅力的なゲームプレイと直感的なコントロールを特徴としています。'
      ]
    },
      skills: {
        title: 'スキル'
      },
      contact: {
        title: 'お問い合わせ',
        description: '質問がある場合は、お気軽にお問い合わせください。',
        email: '28xichen.wang@gmail.com'
      },
      footer: {
        copyright: ''
      },
      languages: {
        en: 'English',
        ja: '日本語'
      }
    }
  }

  let currentLocale = 'ja'

  const t = (key) => {
    const keys = key.split('.')
    let result = messages[currentLocale]
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k]
      } else {
        return key // 如果找不到翻译，返回原始键
      }
    }
    return result
  }

  const setLocale = (locale) => {
    if (messages[locale]) {
      currentLocale = locale
    }
  }

  const getLocale = () => {
    return currentLocale
  }

  nuxtApp.provide('i18n', {
    t,
    locale: getLocale,
    setLocale
  })

  // 添加全局方法
  nuxtApp.vueApp.config.globalProperties.$t = t
})
