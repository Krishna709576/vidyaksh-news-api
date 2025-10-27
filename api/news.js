const Parser = require('rss-parser');
const parser = new Parser();

const SOURCES = [
  // Indian Government & Exam Bodies
  "https://pib.gov.in/rss.aspx",
  "https://mha.gov.in/rss.xml",
  "https://niti.gov.in/node/all/rss.xml",
  "http://prsindia.org/rss/all",
  "https://www.rbi.org.in/scripts/RSSFeed.aspx?feed=All",
  "https://india.gov.in/rss.xml",
  "https://eci.gov.in/rss.xml",
  "https://censusindia.gov.in/rss.xml",
  "https://www.indiabudget.gov.in/feed",
  "http://egazette.nic.in/rss.xml",
  "https://education.gov.in/rss.xml",
  "https://mygov.in/rss.xml",
  "https://ncert.nic.in/rss.xml",
  "https://mohfw.gov.in/rss.xml",
  "https://mhrd.gov.in/rss.xml",
  "https://moef.gov.in/rss.xml",
  "https://cag.gov.in/rss.xml",
  "https://dopt.gov.in/rss.xml",
  "https://dbtindia.gov.in/rss.xml",
  "https://upsc.gov.in/rss.xml",
  "https://ssc.nic.in/rss.xml",
  "https://nta.ac.in/rss.xml",
  "https://ibps.in/feed/",
  "https://sbi.co.in/web/rss",
  "https://gate.iitkgp.ac.in/rss.xml",
  "https://cbse.gov.in/rss.xml",
  "https://icai.org/rssfeed/rss.xml",
  "https://ugc.ac.in/rss.xml",

  // Major Indian News, GK/Current Affairs
  "https://www.thehindu.com/feeder/default.rss",
  "https://timesofindia.indiatimes.com/rssfeedstopstories.cms",
  "https://feeds.feedburner.com/ndtvnews-top-stories",
  "https://www.indiatoday.in/rss/home",
  "http://indianexpress.com/print/front-page/feed/",
  "https://www.financialexpress.com/feed/",
  "https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml",
  "https://www.livemint.com/rss/news",
  "https://www.dailypioneer.com/rss-feed/top-stories.rss",
  "https://zeenews.india.com/rss/india-news.xml",
  "https://www.business-standard.com/rss/latest-news.rss",
  "https://www.businesstoday.in/rss/rssfeed.jsp?feedid=50",
  "https://www.outlookindia.com/rss/newswire.aspx",
  "https://www.theweek.in/news/india.rss",
  "https://www.tribuneindia.com/rss/feed.aspx?cat_id=7",
  "https://scroll.in/feed",
  "https://www.thewire.in/feed/",
  "https://www.jagran.com/rss/news/national.xml",
  "https://www.amarujala.com/rss/national-news.xml",
  "https://navbharattimes.indiatimes.com/rssfeedstopstories.cms",
  "https://www.abplive.com/home/feed",
  "https://www.dnaindia.com/feeds/india.xml",
  "https://www.lokmat.com/rss/national-news.xml",

  // Major Indian Study Portals
  "https://www.gktoday.in/rss.xml",
  "http://www.studyiq.com/feed/",
  "https://www.gradeup.co/feed/news",
  "https://byjus.com/feed/",
  "https://ixamp.com/feed/",
  "https://testbook.com/blog/feed/",
  "https://www.civilsdaily.com/feed/",
  "https://www.insightsonindia.com/feed/",
  "https://www.affairscloud.com/feed/",
  "https://www.jagranjosh.com/feed/general-awareness.xml",
  "https://news.careers360.com/rss/careers360-news-all.xml",
  "https://www.nextias.com/feed/",
  "https://vajiramias.com/portal/feed/",
  "https://forumias.com/blog/feed/",
  "https://edutree.net/feed/",
  "https://netexplanations.com/feed/",

  // Andhra/Telangana Official Edu Portals
  "https://apsche.ap.gov.in/rss.xml",
  "https://tspsc.gov.in/rss.xml",
  "https://tscpget.com/feed/",
  "https://apteachers.in/feed/",
  "https://manabadi.co.in/feeds/education-news.xml",
  "https://sakshieducation.com/rss/education-news.xml",
  "https://eenadupratibha.net/rss/news.xml",
  "https://andhrauniversity.edu.in/rss.xml",

  // World Agencies, Economy/Development
  "https://www.worldbank.org/en/news/all/rss",
  "https://www.weforum.org/agenda/feed",
  "https://www.undp.org/rss.xml",
  "https://www.imf.org/en/News/rss.xml",
  "https://www.un.org/press/en/rss.xml",
  "https://unesdoc.unesco.org/feed",

  // International News for Current Affairs
  "https://feeds.bbci.co.uk/news/rss.xml",
  "http://rss.cnn.com/rss/edition.rss",
  "http://feeds.reuters.com/Reuters/worldNews",
  "https://www.theguardian.com/world/rss",
  "https://www.aljazeera.com/xml/rss/all.xml",
  "https://apnews.com/rss",
  "https://feeds.npr.org/1001/rss.xml",
  "https://rss.dw.com/rdf/rss-en-all",
  "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",

  // International Economics/Business/Development
  "https://hbr.org/feed",
  "https://www.economist.com/latest/rss.xml",
  "https://www.marketwatch.com/rss/topstories",
  "https://www.forbes.com/business/feed/",
  "https://www.bloomberg.com/feed/podcast/etf-report.xml",
  "https://www.ft.com/rss/home",

  // Misc Indian/Regional and Educational
  "https://edexlive.com/rss/news",
  "https://www.telugu.stop.com/rss/education-news.xml",
  "https://www.sakshi.com/rss/tags/vijayawada.xml",
  "https://www.v6velugu.com/rss/latest-news.xml",
  "https://www.prabhanews.com/feed/",
  "https://www.anandabazar.com/rss/national.xml",
  "https://www.maharashtratimes.com/rss/nationfeed.cms",
  "https://vijaykarnataka.com/rss/national-news.xml",
  "https://www.dinamani.com/rssfeed/j.asp?cat=india_news&newsType=RSS",
  "https://www.dailythanthi.com/rss/latest_news.xml",

  // Science/Education/Reports
  "https://www.nature.com/nature.rss",
  "https://www.scientificamerican.com/feed/",
  "https://www.smithsonianmag.com/rss/",
  "https://feeds.feedburner.com/tedtalks_video",
  "https://www.sciencemag.org/rss/current.xml",
  "https://www.livescience.com/feeds/all",
  "https://www.popsci.com/arcio/rss/",

  // UN Agencies, World Orgs, Analytical
  "https://data.unicef.org/feed/",
  "https://www.oecd.org/news/rss.xml",
  "https://www.fao.org/news/rss.xml",
  "https://www.who.int/feeds/entity/mediacentre/news/en/rss.xml",
  "https://www.ilo.org/global/about-the-ilo/newsroom/news/WCMS_079365/lang--en/index.xml",

  // Judicial and Law
  "https://www.livelaw.in/rss/home.xml",
  "https://www.barandbench.com/rss/news.xml",

  // Indian Parliament, RTI, Policy
  "https://www.loksabha.nic.in/rss.xml",
  "https://rajyasabha.nic.in/rss.xml",
  "https://rti.gov.in/rss.xml",
  "https://niti.gov.in/rss.xml",

  // Demography, Stats, Planning
  "https://mospi.gov.in/rss.xml",
  "https://statisticstimes.com/rss.xml",
  "https://www.statista.com/rss/feed.xml",

  // Major Exam Preparation & Results
  "https://ntaresults.nic.in/RSSFeed.aspx",
  "https://www.sscadda.com/feed/",
  "https://www.bankersadda.com/feed/",
  "https://testbook.com/blog/feed/",
  "https://www.adda247.com/jobs/feed/",

  // Environment, Weather
  "https://mausam.imd.gov.in/rssfeedWebsite.xml",
  "https://wwf.panda.org/?rss",
  "https://www.unep.org/rss.xml",

  // Language/Regional (Sample: add more as required)
  "https://www.manatelugumovies.net/education-news.xml",
  "https://www.andhrajyothi.com/rss/national-news.xml",
  "https://www.ntnews.com/rss/education.xml",
  "https://www.prajasakti.com/rssfeed/j.asp?cat=main_news&newsType=RSS",
  "https://timesofindia.indiatimes.com/rssfeeds/3908999.cms",

  // Indian Science & Technology
  "https://www.isro.gov.in/rss.xml",
  "https://dst.gov.in/rss.xml",
  "https://www.csir.res.in/rss.xml",

  // GK, Editorials, Quiz
  "https://www.fdaytalk.com/feed/",
  "https://www.mrunal.org/feed",
  "https://factly.in/feed/",
  "https://www.drishtiias.com/rssfeed/current-affairs.xml",
  "https://www.shankariasacademy.com/currentaffairs.xml",
  "https://www.clearias.com/feed/",
  "https://vajiramias.com/portal/feed/",
  "https://gktoday.in/feed/",
  "https://www.insightsonindia.com/feed/",

  // Add more or swap as per your syllabus/exam/community!
];

let newsCache = [];
let lastFetched = 0;
async function fetchAllFeeds() {
  let news = [];
  for (const url of SOURCES) {
    try {
      const feed = await parser.parseURL(url);
      news = news.concat(
        (feed.items || []).slice(0, 5).map(item => ({
          title: item.title,
          link: item.link,
          source: feed.title,
          date: item.pubDate,
          summary: (item.contentSnippet || item.content || '').split('. ').slice(0, 3).join('. ')
        }))
      );
    } catch { continue; }
  }
  return Array.from(new Map(news.map(a => [a.title, a])).values()).slice(0, 100);
}

module.exports = async (req, res) => {
  const now = Date.now();
  if (!newsCache.length || now - lastFetched > 60 * 60 * 1000) {
    newsCache = await fetchAllFeeds();
    lastFetched = now;
  }
  res.status(200).json({
    lastFetched: new Date(lastFetched).toLocaleString(),
    articles: newsCache
  });
};
