import browser from 'webextension-polyfill'
import * as U from '../util'
class Background {
	private whiteList: U.Domain[] = []

	constructor() {}

	listenForMessages() {
		browser.runtime.onMessage.addListener((message, sender) => {
			const { type, data } = message
			this.handleDealMessages(type, data)
		})
	}

	handleDealMessages(type: string, data: any) {
		switch (type) {
			case U.ADMETA_MSG_ACCOUNT:
				this.saveInfo(data)
				break

			default:
				break
		}
	}

	saveInfo(data: any) {
		browser.storage.local.set({ address: data.address, isClaim: data.claim })
	}

	async getWhiteList() {
		const r = await U.Helper.apiCall({
			URI: U.DOMAIN_CONFIG_URL,
			method: 'GET',
			full_url: true
		})
		console.log(r.products)
		this.whiteList = r.products
	}

	private reportBroswer(tab: any) {
		if (!this.whiteList.length) {
			return
		}
		const isIn = U.Helper.isInWhiteList(this.whiteList, tab.url || '-1')
		if (isIn) {
			const idx = U.Helper.currentDomainIdx(this.whiteList, tab.url || '-1')
			const timer = setTimeout(() => {
				clearTimeout(timer)

				console.log('report', idx, this.whiteList[idx].name)
				// TODO report
				// U.Helper.apiCall()
			}, U.REPORTING_TIME)
		}
	}

	listenTabChange() {
		browser.tabs.onActivated.addListener(l => {
			browser.tabs
				.query({ active: true, currentWindow: true })
				.then(activeTab => {
					this.reportBroswer(activeTab[0])
				})
		})
	}

	listenTabUpdate() {
		browser.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
      if (changeInfo.status === 'complete') {
        this.reportBroswer(tab)
      }
		})
	}

	init() {
		this.listenForMessages()
		this.getWhiteList()
		this.listenTabChange()
		this.listenTabUpdate()
	}
}

new Background().init()
