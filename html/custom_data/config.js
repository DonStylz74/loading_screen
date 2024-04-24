var Config = {
	
	server_name: '',
	pause_after_intro: 3000,
	bg_video: 'ZBnAxcexmI8', // https://www.youtube.com/watch?v=Wqsg2vWHZBM oIPhZmmbnDw

	radio_volume: 0.15,
	radio_playlist: [
        //{name:'Hardstyle', link:'http://server-23.stream-server.nl:8326/stream?type=http&nocache=63527'}, // STREAM
        {name: 'Lil jon - Alive', link:'custom_data/lil_jon_alive.mp3' } // patch
    ],
	
	main_menu: [
		{caption: 'HOME', onclick: LS.home.show},
		{caption: 'NEWS', onclick: LS.news.show},
		{caption: 'RULES', onclick: LS.rules.show},
		{caption: 'CONTACTS', onclick: LS.contacts.show},
	],
	
	assets :
	{
		bad_tv: './assets/bad_tv.mp4',
	},
};