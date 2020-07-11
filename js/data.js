var data = {
	baseUrl:"https://app.gwaworld.io",
	showUrl:"https://gwaworld.io",
	//baseUrl:"http://127.0.0.1",
	//showUrl:"http://127.0.0.1",
	defaultLang: "cn",
	langItem: lang["cn"],
	lang: lang,
	showNav: false,
	startTime: "2019-05-20",
	gameCurrent: "token",
	lotteryCurrent: "join",
	directRules: false,
	smallRules: false,
	seasonRules: false,
	countError: false,
	sendError: false,
	lotteryError:false,
	gameHistory: false,
	directPop: false,
	groupPop: false,
	seasonPop: false,
	copySuccess:false,
	balanceError:false,
	sdfBalanceError:false,
	canPlay:false,
	ethNumber: 1,
	joinNumber: 1,
	joinNumberNew:1,
	lotteryNumber: 1,
	lotteryCount:5,
	sale_amount_v1:5232308643900000,
	playerID:"",
	winnerID:0,
	totalV:0,
	rankArr:null,
	langList: {
		en: "English",
		// kr: "한국어",
		// jp: "日本語",
		// ru: "Россия",
		// sg: "中文（繁体）",
		cn: "中文（简体）",
		// lt: "Italiano"
	},
	gameData: {
		currentTimes:0,
		bonusPool: "--",
		ethRatio: "--",
		joinItem: {
			"1ETH": 1,
			"8ETH": 8,
			"16ETH": 16,
			"33ETH": 33,
			// "103ETH": 103
		},
		joinItemNew: {
			"1ETH": 1,
			"8ETH": 8,
			"16ETH": 16,
			"33ETH": 33,
			// "103ETH": 103
		},
		link: {
			direct: null,
			count: null,
			id: null,
			address:null
		},
		history: []
	},
	lotteryData: {
		currentTimes: 1,
		collected: 0,
		lotteryRatio: "--",
		records: {
			term: 0,
			loginfor:0,
			bonusList: [{No: 1,code: [],bonus: 0},{No: 2,code: [],bonus: 0},{No: 3,code: [],bonus: 0}],
			myData: {
				code: [],
				myBonus: 0,
				luck_recommend: 0
			}
		}
	},
	rankData: {
		direct: {
			achievement: 0,
			rank: 0,
			top10: []
		},
		group: {
			achievement: 0,
			rank: 0,
			top10: []
		},
		season: {
			achievement: 0,
			rank: 0,
			term: 0,
			top60: []
		}
	},
	income: {
		total: {
			eth: 0,
			sdf: 0
		},
		unsettled: {
			eth: 0,
			sdf: 0
		},
		gameReward: {
			eth: 0,
			sdf: 0
		},
		list: {
			pool: 0,
			statics: 0,
			dynamic: {
				total: 0,
				share: 0,
				group: 0,
				rank: 0
			},
			distribution: 0,
			season: 0,
			luckDraw: 0,
			luckRecommend: 0,
			nodeIncome: 0,
			settled: {
				eth: 0,
				sdf: 0
			},
			limit: 0,
			v4Bonus:0,
		}
	},
	otherData: {
		myData: {
			grade:0,
			level: 0
		},
		direct: {
			nodes: 0,
			achievement: 0
		},
		group: {
			nodes: 0,
			largeArea: 0,
			secondArea:0,
			smallArea: 0
		},
		list: {
			token: 0,
			nextSeason:0,
			burnDown: 0,
			v4Node: 0
		}
	},
	web3:null,
	web3Provider: null,
    contracts: {},
    superiorID:0,
    ethBalance:0,
    tokenBalance:0,
	gwaBalance:0,
	gwaToEthBalance:0,
	gwaToEth:1500,
    isPlay:true,
    investTime:0,
    account: null,
    lotteryEnd:false,
	timeId:{"scoundDown":null,"show":null},
	linkData:{},
	userData:{
		addr: "",
		bigAreaIncome: 0,//大区业绩
		dynamicIncome: 0,//动态业绩
		eth_to_gwa: 1,
		gwa: 0,
		id: "",
		money: 0,
		noSettlementEth: 0, //未结算
		noSettlementGwa: 0, //未结算
		openPrizeDateL: 0,
		pid: "-1",
		recommendIncome: 0,//直推业绩
		recommendNodeNum: 0, //直推节点
		recommend_num: 0,  //直推人数
		settlementEth: 0, //已结算
		settlementGwa: 0,  //已结算
		smallAreaIncome: 0, //小区业绩
		staticIncome: 0,   //静态收益
		surplusMoney: 0,   //动静出局差额
		withdrawalEth: 0,  //可提现
		withdrawalGwa: 0,  //可提现
		recommendIncome:0, //分红奖
		levelIncome:0, //级别奖，
		rankIncome:0, //每日排名奖
	},
	myFriendsList:[], //我的好友
	adminAcount:"0xdac10187adfe3fc900344c333682e136c398afea"
}