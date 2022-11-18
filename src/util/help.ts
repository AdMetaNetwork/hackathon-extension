import browser from 'webextension-polyfill'

class Help {
  static goWeb(url: string) {
    browser.tabs.create({ url })
  }

  static formatAddress(address: string) {
    const str_1 = address.substring(0, 4)
    const str_2 = address.substring(address.length - 4)
    return `${str_1}......${str_2}`
  }
}

export default Help;