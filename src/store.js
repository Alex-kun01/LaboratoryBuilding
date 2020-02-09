import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    lunbotu: [
      'https://dn-simplecloud.shiyanlou.com/course/1581128561517_2020%E5%85%83%E5%AE%B5banner-%E6%B4%BB%E5%8A%A8%E4%B8%AD-F8414D.png',
      'https://dn-simplecloud.shiyanlou.com/course/1581147433848_%E9%AB%98%E6%A0%A1-pc.png',
      'https://dn-simplecloud.shiyanlou.com/course/1581147496463_%E8%BF%90%E7%BB%B4(1).png',
      'https://dn-simplecloud.shiyanlou.com/course/1580691282087_30%E5%A4%A9%E7%99%BE%E6%A5%BC%E6%8C%91%E6%88%98banner.png'
    ],
    menuData: [
      {
        title: '后端开发',
        menu: ['Python', 'PHP', 'Java', 'Ruby', 'Laravel', 'C', 'C++', 'Go', 'Flask', 'OpenCV', 'ThinkPHP', '爬虫', 'Django', 'Spring', 'SSM', 'Node.js', 'Rust', 'Nginx', 'MongoDB', 'Micronaut'],
        class: ['Python 新手入门课', 'Java 编程语言基础', 'Diango 基础教程', 'Python3 实现简单的 Web 服务器']
      },
      {
        title: 'Linux 运维',
        menu: ['Linux', 'Shell', '网络', 'Nginx', 'Ansible', 'Git'],
        class: ['Linux 基础入门（新版）', '高级 bash 脚本编程指南', 'Git 与 GitHub 入门实践', 'Kubernets 入门实战']
      },
      {
        title: '云计算与大数据',
        menu: ['Hadoop', 'Spark', 'Scala', 'Docker', '机器学习', 'SDN', 'Hbase', 'Hive', 'Mahout', '云计算', '大数据', 'TensorFlow', '知识图谱', 'Kunbernetes', '数据分析'],
        class: ['机器学习开放基础课程', 'Kaggle 数据分析项目入门实战', '使用Flume 收集数据', '大数据带你挖掘打车的秘籍']
      },
      {
        title: '数据库',
        menu: ['SQL', 'NoSQL', 'MongoDB', 'MySQL', 'Redis', 'Neo4j', 'Oracle'],
        class: ['MySQL 基础课程', 'MongDB 基础教程', 'Python3 实现键值数据库', 'Spark SQL 入门到上手实战']
      },
      {
        title: '信息安全',
        menu: ['Web安全', '安全开发', '网络安全', 'Kali', '加密解密', '系统安全', '渗透测试', '信息隐藏'],
        class: ['密钥加密实验', 'SQL 主入基础原理介绍', 'Python 实现端口扫描器', 'Linux 防火墙技术']
      },
      {
        title: 'Web 前端',
        menu: ['HTML5', 'Web', 'HTML', 'Javascript', 'jQuery', 'Bootstrap', 'CSS', 'Node.js', 'Vue.js'],
        class: ['HTML', 'CSS 基础课程', 'JavaScript 基础课程', 'React 全家桶实现销售管理系统']
      },
      {
        title: '计算机专业课',
        menu: ['新手入门', '算法', '计算机专业课', '设计模式', '汇编'],
        class: ['数据结构（新版）', '操作系统原理与实践', 'TCP/IP 网络协议基础', 'C 语言入门教程']
      },
      {
        title: '其他技术',
        menu: ['Swift', 'Windows', 'Electron', 'Android', 'R', 'Julia'],
        class: ['R 语言基础入门', '基础R的高级数据管理', '对英国房屋价格建模并预测', '使用 GitHub 实现团队 Coding Review 流程']
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
