// 和招縁アクセスページ専用スクリプト - 2025年4月版
;(function () {
  // 即時実行関数でスコープを限定
  document.addEventListener('DOMContentLoaded', function () {
    // スムーズスクロール用のクラスを追加
    document.documentElement.classList.add('washouen-scroll-smooth')

    // ボタン要素を取得
    const shiomachiButton = document.querySelector('a[href="#shiomachi"]')
    const fukunakaButton = document.querySelector('a[href="#fukunaka"]')

    if (!shiomachiButton || !fukunakaButton) return // 要素がなければ処理を終了

    // スムーズスクロール関数
    function smoothScroll(target) {
      const element = document.querySelector(target)
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 20, // 少し上部にスペースを確保
          behavior: 'smooth',
        })
      }
    }

    // アクティブボタンのスタイル更新関数
    function updateActiveButton(activeButton) {
      // 全てのボタンからアクティブクラスを削除
      document.querySelectorAll('.washouen-access-store-button').forEach((btn) => {
        btn.classList.remove('active-store-button')
      })

      // アクティブなボタンにクラスを追加
      activeButton.classList.add('active-store-button')
    }

    // ボタンのクリックイベント設定
    shiomachiButton.addEventListener('click', function (e) {
      e.preventDefault()
      smoothScroll('#shiomachi')
      updateActiveButton(this)
    })

    fukunakaButton.addEventListener('click', function (e) {
      e.preventDefault()
      smoothScroll('#fukunaka')
      updateActiveButton(this)
    })

    // URL内のハッシュを確認して初期状態を設定
    const hash = window.location.hash
    if (hash === '#fukunaka') {
      updateActiveButton(fukunakaButton)
      setTimeout(() => {
        smoothScroll('#fukunaka')
      }, 100)
    } else if (hash === '#shiomachi' || hash === '') {
      // デフォルトは塩町店を選択状態に
      updateActiveButton(shiomachiButton)
      if (hash === '#shiomachi') {
        setTimeout(() => {
          smoothScroll('#shiomachi')
        }, 100)
      }
    }
  })
})()
