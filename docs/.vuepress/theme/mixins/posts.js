import { filterPosts, sortPostsByStickyAndDate, sortPostsByDate } from '../helpers/postData'

export default {
  computed: {
    //随机背景图片
    $coverRandom (){
      const num = 33;
      const url = "http://img.testw.top/";
      const inum = RandomNum(1,num)
      return url + inum + '.jpg';
    },
    // 随机样式
    $cssysRandom (){
      const ysnum = 3;
      const ysm = "item-border-";
      const ysmnum = RandomNum(1,ysnum)
      return ysm + ysmnum;
    },

    $recoPosts () {
      const {
        $categories: { list: articles }
      } = this

      let posts = articles.reduce((allData, currentData) => {
        return [...allData, ...currentData.pages]
      }, [])

      posts = filterPosts(posts, false)
      sortPostsByStickyAndDate(posts)

      return posts
    },
    //首页
    $recoPostsIndex(){
      const {
        $categories: { list: articles }
      } = this

      let posts = articles.reduce((allData, currentData) => {
        return [...allData, ...currentData.pages]
      }, [])

      posts = filterPosts(posts, false)
       //过滤是否在首页显示
      posts = posts.filter((item, index) => {
        if(item.frontmatter.isShowIndex != false){
        return item;
      }
      })
      sortPostsByStickyAndDate(posts)
      return posts
    },
    $recoPostsForTimeline () {
      let pages = this.$recoPosts
      const formatPages = {}
      const formatPagesArr = []
      pages = filterPosts(pages, true)
      this.pages = pages.length == 0 ? [] : pages
      for (let i = 0, length = pages.length; i < length; i++) {
        const page = pages[i]
        const pageDateYear = dateFormat(page.frontmatter.date, 'year')
        if (formatPages[pageDateYear]) formatPages[pageDateYear].push(page)
        else {
          formatPages[pageDateYear] = [page]
        }
      }

      for (const key in formatPages) {
        const data = formatPages[key]
        sortPostsByDate(data)
        formatPagesArr.unshift({
          year: key,
          data
        })
      }

      return formatPagesArr
    },
    $showSubSideBar () {
      const {
        $themeConfig: { subSidebar: themeSubSidebar, sidebar: themeSidebar },
        $frontmatter: { subSidebar: pageSubSidebar, sidebar: pageSidebar }
      } = this

      const headers = this.$page.headers || []

      return [themeSubSidebar, themeSidebar, pageSubSidebar, pageSidebar].indexOf('auto') > -1 &&
             headers.length > 0
    }
  }
}
//  随机数   //
function RandomNum (Min,Max) {
  var Range = Max - Min;
  var Rand = Math.random();   
  var num = Min + Math.round(Rand * Range);
  return num;
}

function renderTime (date) {
  var dateee = new Date(date).toJSON()
  return new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/-/g, '/')
}
function dateFormat (date, type) {
  date = renderTime(date)
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const mon = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  if (type == 'year') return year
  else return `${mon}-${day}`
}
