
#百度音乐播放器

###	1. Index
	   	1> SearchComponent
	   	2> SliderComponent
	   	3> RankingNavComponent
	   	4> RankingListComponent
	   			HotMusic
	   			NewMusic
	   			KingMusic
	   	5> SingersComponent
	   			SingersListComponent
![Index第一张图片](https://github.com/wang2304411715/VueMusicPlayer/blob/master/PreviewImages/index1.png)
![Index第二张图片](https://github.com/wang2304411715/VueMusicPlayer/blob/master/PreviewImages/index2.png)
###	2. MusicPlay
		LrcComponent
![MusicPlay第一张图片](https://github.com/wang2304411715/VueMusicPlayer/blob/master/PreviewImages/musicPlay1.png)
![MusicPlay第二张图片](https://github.com/wang2304411715/VueMusicPlayer/blob/master/PreviewImages/musicPlay2.png)
###	3. RankingList
![RankingList图片](https://github.com/wang2304411715/VueMusicPlayer/blob/master/PreviewImages/rangkingList.png)
###	4. SearchView	
![SearchView图片](https://github.com/wang2304411715/VueMusicPlayer/blob/master/PreviewImages/searchView.png)
###	5. SingerInfor
![SingerInfor图片](https://github.com/wang2304411715/VueMusicPlayer/blob/master/PreviewImages/singerSongs.png)

##首页音乐排行榜URL：
http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=5&offset=0"

	type: 1. 新歌榜
		  2. 热歌榜
		  11.摇滚榜
		  12.爵士
		  16.流行
		  21.欧美金曲榜
		  22.经典老歌榜
		  23.情歌对唱榜
		  24.影视金曲榜
		  25.网络歌曲榜

	size: 返回条目数量
	offset: 获取偏移

##获取指定歌手信息
http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=2517
	
	tinguid：歌手ID


##获取指定歌手的歌曲列表
http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=2517&limits=20&use_cluster=1&order=2"

	tinguid: 歌手ting id
	limits: 返回条目数量


##获取指定类型歌榜的排行榜
http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type=2&size=20&offset=0

	type: 歌曲类型
    size: 加载数量
    offset: 偏移

##根据搜索关键词获取歌曲列表
http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=

	query: 关键词

##根据歌曲ID播放对应的歌曲
http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=

	songid： 歌曲ID

##根据歌曲ID查找歌词
http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.lry&songid=
