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
        title: ['后端开发', 'Python', 'PHP'],
        menu: ['Python', 'PHP', 'Java', 'Ruby', 'Laravel', 'C', 'C++', 'Go', 'Flask', 'OpenCV', 'ThinkPHP', '爬虫', 'Django', 'Spring', 'SSM', 'Node.js', 'Rust', 'Nginx', 'MongoDB', 'Micronaut'],
        class: ['Python 新手入门课', 'Java 编程语言基础', 'Diango 基础教程', 'Python3 实现简单的 Web 服务器']
      },
      {
        title: ['Linux 运维', 'Linux', 'Shell'],
        menu: ['Linux', 'Shell', '网络', 'Nginx', 'Ansible', 'Git'],
        class: ['Linux 基础入门（新版）', '高级 bash 脚本编程指南', 'Git 与 GitHub 入门实践', 'Kubernets 入门实战']
      },
      {
        title: ['云计算与大数据', 'Hadoop', 'Spark'],
        menu: ['Hadoop', 'Spark', 'Scala', 'Docker', '机器学习', 'SDN', 'Hbase', 'Hive', 'Mahout', '云计算', '大数据', 'TensorFlow', '知识图谱', 'Kunbernetes', '数据分析'],
        class: ['机器学习开放基础课程', 'Kaggle 数据分析项目入门实战', '使用Flume 收集数据', '大数据带你挖掘打车的秘籍']
      },
      {
        title: ['数据库', 'SQL', 'NoSQL'],
        menu: ['SQL', 'NoSQL', 'MongoDB', 'MySQL', 'Redis', 'Neo4j', 'Oracle'],
        class: ['MySQL 基础课程', 'MongDB 基础教程', 'Python3 实现键值数据库', 'Spark SQL 入门到上手实战']
      },
      {
        title: ['信息安全', 'Web安全', '安全开发'],
        menu: ['Web安全', '安全开发', '网络安全', 'Kali', '加密解密', '系统安全', '渗透测试', '信息隐藏'],
        class: ['密钥加密实验', 'SQL 主入基础原理介绍', 'Python 实现端口扫描器', 'Linux 防火墙技术']
      },
      {
        title: ['Web 前端', 'HTML5', 'Web'],
        menu: ['HTML5', 'Web', 'HTML', 'Javascript', 'jQuery', 'Bootstrap', 'CSS', 'Node.js', 'Vue.js'],
        class: ['HTML', 'CSS 基础课程', 'JavaScript 基础课程', 'React 全家桶实现销售管理系统']
      },
      {
        title: ['计算机专业课', '新手入门', '算法'],
        menu: ['新手入门', '算法', '计算机专业课', '设计模式', '汇编'],
        class: ['数据结构（新版）', '操作系统原理与实践', 'TCP/IP 网络协议基础', 'C 语言入门教程']
      },
      {
        title: ['其他技术', 'Swift', 'Windows'],
        menu: ['Swift', 'Windows', 'Electron', 'Android', 'R', 'Julia'],
        class: ['R 语言基础入门', '基础R的高级数据管理', '对英国房屋价格建模并预测', '使用 GitHub 实现团队 Coding Review 流程']
      }
    ],
    staticList: [
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1545727530595_%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90%E4%B8%8E%E6%8C%96%E6%8E%98.png',
        content: '6周成为数据分析与挖掘工程师',
        foot: '最近班次： 3月5日'
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1552548895361_%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_15525486676209.png',
        content: '11周从0基础到Linux运维工程师',
        foot: '最近班次： 2月18日'
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1565168718677_%E6%A5%BC%E2%80%94%E2%80%94%E9%A6%96%E9%A1%B5.png',
        content: '6周成为深度学习工程师',
        foot: '最近班次： 3月16日'
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1552548866160_%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E6%88%AA%E5%9B%BE_15525486809695.png',
        content: '11周成为Python初级工程师',
        foot: '最近班次： 3月12日'
      }
    ],
    dycList: {
      f1: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1542593215523_%E3%80%90614%E3%80%91-%E3%80%90Python%E5%AE%9E%E7%8E%B0%E9%94%AE%E5%80%BC%E6%95%B0%E6%8D%AE%E5%BA%93%E3%80%91.png',
          content: 'Python3 实现键值数据库',
          text: ' 本课程将通过理解一个操作类似于 Redis，存储理念来自于 CouchDB 的键值数据库的源代码来学习如何做数据库的数据存储，体会使用不可变数据结构的优点。',
          number: 5874,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1539678114813_[1166]-[C++-%E5%AE%9E%E7%8E%B0-STL-%E5%BA%93%E7%9A%84%E7%BB%84%E4%BB%B6%E5%92%8C%E7%AE%97%E6%B3%95].jpg',
          content: 'C++ 实现 STL 标准库和算法',
          text: ' 本课程主要讲解了C++ STL的容器和算法的实现，通过本课程可以快速掌握顺序容器vector、list 和 deque 以及关联容器 set 和 map 等，更有迭代器和算法的讲解。 ',
          number: 3263,
          color: 'green',
          paic: '免费'
        }
      ],
      f2: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid214893-20191014-1571044901528',
          content: ' TensorFlow 2 深度学习入门与实践',
          text: ' TensorFlow 是由谷歌在 2015 年 11 月发布的深度学习开源工具，我们可以用它来快速构建深度神经网络，并训练深度学习模型。2019 年，TensorFlow 正式推出了 2.0 版本，也意味着 TensorFlow 从 1.x 正式过度到 2.x 时代。 ',
          number: 229,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1470631844655.png',
          content: ' C++ 开发 Web 服务框架 ',
          text: ' 服务器开发中 Web 服务是一个基本的代码单元，将服务端的请求和响应部分的逻辑抽象出来形成框架，能够做到最高级别的框架级代码复用。本次项目将综合使用 C++11 及 Boost 中的 Asio 实现 HTTP 和 HTTPS 的服务器框架。 ',
          number: 4342,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid770606-20191205-1575541847039',
          content: ' Spring Cloud 与 Docker 实战',
          text: ' 本课程主要讲解如何通过实验的方式实战 Spring Boot/Cloud 并结合 Docker 使用。课程包含了服务注册于发现中心 Eureka，Spring Boot Actuator 监控端点，Ribbon 客户端负载均衡，Feign 声明式 REST 调用，Docker Compose 的基本使用等知识点，最后通过 Dcoker Compose 介绍了接近实际开发的两个例子。 ',
          number: 208,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1517283041138.png',
          content: ' 使用 Python 实现深度神经网络 ',
          text: ' 人工智能是目前比较火热的关键词之一，而神经网络可以看做是人工智能的一种具体实现方法。本课程将手把手教你使用 Python 实现一个深度神经网络，让你在实际动手的过程中理解深度学习的一些基本原理，带你真正入门深度学习。 ',
          number: 4280,
          color: 'yellow',
          paic: '会员'
        }
      ],
      f3: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1554280673829_%E3%80%901262%E3%80%91-%E3%80%90Vue%E5%9F%BA%E7%A1%80%E5%85%A5%E9%97%A8%E3%80%91.png',
          content: ' Vue.js 基础入门 ',
          text: ' 本课程是一门 Vue.js 的入门课程，介绍了 Vue 的安装和使用，带领大家学习 Vue 模板语法，核心指令，计算和侦听属性，条件和循环渲染元素，以及怎样去绑定元素 class 和 style,处理基础事件，Vue 组件开发等。 ',
          number: 2874,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1517282545439.png',
          content: 'Python 实现康威生命游戏',
          text: ' 康威生命游戏是一个久负盛名的数学游戏，有简单的规则和无穷无尽的组合。本课程将使用 pygame 模块来实现这样一个游戏，让你在趣味游戏中提升对 Python 的理解，入门 pygame。 ',
          number: 3738,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1525830964659_%E3%80%90313%E3%80%91-%E3%80%90C%E8%AF%AD%E8%A8%80%E5%BF%AB%E9%80%9F%E5%AE%9E%E7%8E%B0%E4%BA%94%E5%AD%90%E6%A3%8B%E3%80%91.png',
          content: 'C 语言快速实现五子棋',
          text: ' 本课程用最简单的代码来实现五子棋游戏，帮助大家复习基础知识，学习了如何设计并实现一个五子棋游戏，巩固大家的基础知识。涉及到C语言的基础逻辑判断，程序设计与编写。本课程比较简单，没有复杂的语法和逻辑，适合具有C基础的用户，一起探索和发现C语言可以做一些有趣的事情。 ',
          number: 7080,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1542593410560_%E3%80%90651%E3%80%91-%E3%80%90Python3%E5%9B%BE%E7%89%87%E9%9A%90%E5%86%99%E6%9C%AF%E3%80%91.png',
          content: 'Python3 实现图片隐写术',
          text: ' 通过Python3实现将关键信息隐藏在图片的效果，主要目的是为了不让预期接收者以外的人知晓传递的内容。与电视剧中使用特殊墨水传递信息一样，表面看就是一张什么都没写的白纸，实则暗藏着重要信息。 ',
          number: 7636,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1517277942920.png',
          content: 'Python 3 实现图片转彩色字符',
          text: ' 通过借助 docopt 库与 Pillow 库来构建命令行解析器获取指定图像并将其转换成相应样式的彩色字符图像，并在终端上将转化后的图像打印出来。完成本课学习之后，大家可尝试选择自己喜欢的头像图片制作自己的彩色字符头像哦！ ',
          number: 1393,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1504234990801.png',
          content: '比特币基础概念入门',
          text: ' 本课程从比特币的密码学原理，交易原理等等方面展开，一层一层地揭开区块链技术的面纱，带领同学们领略来自未来的技术。 ',
          number: 1328,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1542591820614_%E3%80%9042%E3%80%91-%E3%80%90GO%E8%AF%AD%E8%A8%80%E5%BC%80%E5%8F%912048%E3%80%91.png',
          content: ' Go 语言开发 2048 ',
          text: ' 知名小游戏 2048，使用 Go 语言编程实现。本实验需要 Go 语言基础，建议先学习 Go语言编程：https://www.shiyanlou.com/courses/11 ',
          number: 1580,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1517285757115.png',
          content: ' 基于Pygame开发贪吃蛇和俄罗斯方块 ',
          text: ' 本课程基于Pygame开发贪吃蛇和俄罗斯方块，通过逐步学习Pygame基础知识，到从零开始实现游戏开发，课程难度由浅入深，内容通俗易懂，确保同学们能够很好的掌握和理解。 ',
          number: 1805,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid214893-20200117-1579244581944',
          content: ' Vue.js 和 Node.js 构建内容发布系统 ',
          text: ' 内容发布系统作为基础的网站应用，可以用于新闻、博客、官网、论坛、社区等各种用途。本训练营教大家如何从头构建实现一个前后端分离的内容发布系统，包括了前端页面、后端服务、数据库等。 ',
          number: 1,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid214893-20200117-1579248373874',
          content: ' 《C++语言程序设计（第4版）》（郑莉著）配套实验 ',
          text: ' 本课程作为 Julia 这门编程语言的入门教程，旨在介绍其基础语法，希望大家能够通过本课程的学习，熟练掌握 Julia 的语法风格和编程习惯。 ',
          number: 1,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/ncn45.jpg',
          content: ' Julia 简明教程 ',
          text: ' 本课程基于《C++语言程序设计（第4版）学生用书》（郑莉 董渊编著，清华大学出版社），可以配合该教材使用。该课程以面向对象的程序设计思想为主线，以通俗易懂的方法介绍C++语言。本系列实验可配合MOOC课程学习：C++语言程序设计基础 ',
          number: 1,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/ncn221.jpg',
          content: ' 操作系统实验－基于uCore OS ',
          text: ' 清华大学计算机系操作系统课程实验（2019春季）- 学堂在线，配套实验。主要讲解操作系统中如何管理和协调应用程序对计算机系统中软硬件资源的使用，例如内存管理、进程调度等等。 ',
          number: 1,
          color: 'green',
          paic: '免费'
        }
      ],
      f4: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/ncn1.jpg',
          content: 'Linux 基础入门（新版） ',
          text: ' 要在实验楼愉快地学习，先要熟练地使用 Linux，本实验中通过在线动手实验的方式学习 Linux 常用命令，用户与权限管理，目录结构与文件操作，环境变量，计划任务，管道与数据流重定向等基本知识点。 ',
          number: 269817,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1550728729236_%E3%80%901035%E3%80%91-%E3%80%90Git%E4%B8%8EGitHub%E5%85%A5%E9%97%A8%E5%AE%9E%E8%B7%B5%E3%80%91(1).png',
          content: ' Git 与 GitHub 入门实践 ',
          text: ' 本课程为 Git 与 GitHub 的入门课程，本着实用的原则，针对零基础同学，以图文的形式详细介绍了 Git & GitHub 结合使用的基本操作。包括以下知识点：在 GitHub 上创建仓库、克隆 GitHub 上的仓库到本地、添加修改到暂存区以及撤销修改、配置个人信息、版本回退、处理提交时间线分叉问题、使用本地提交变化记录、添加 SSH 关联授权、为 Git 命令设置别名、刷新本地分支信息、创建新的本地分支、将新分支中的提交推送至远程仓库、本地分支跟踪远程分支、删除远程分支、本地分支的更名与删除等。 ',
          number: 9326,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1542592801417_%E3%80%90596%E3%80%91-%E3%80%90Python3%E7%AE%80%E6%98%8E%E6%95%99%E7%A8%8B%E3%80%91.png',
          content: ' Python3  简明教程 ',
          text: ' 简明易懂的 Python3 课程，不仅适用于那些有其它语言基础的同学，对没有编程经验的同学也非常友好。本课程不仅讲解了 Python3 基础知识，还介绍了 PEP8、Virtualenv、测试、项目结构以及 Flask 相关内容 ',
          number: 73114,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1536283668551_%E3%80%901152%E3%80%91-%E3%80%90SpringBoot%E5%85%A5%E9%97%A8%E6%95%99%E7%A8%8B%E3%80%91.png',
          content: ' Spring Boot 入门教程 ',
          text: ' Spring Boot入门教程，Spring Boot作为当前十分流行的Java框架，深得Java开发人员的喜爱。本节课程需要同学们掌握Spring的基础知识。本节课程采用Spring Boot 2.0.4。 ',
          number: 9586,
          color: 'green',
          paic: '免费'
        }
      ],
      f5: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1560753799932_%E3%80%901219%E3%80%91-%E3%80%90%E9%87%87%E7%94%A8%E5%BE%AE%E6%9C%8D%E5%8A%A1%E6%9E%B6%E6%9E%84%E5%9F%BA%E4%BA%8EFlask%E5%AE%9E%E7%8E%B0%E7%94%B5%E5%95%86%E7%BD%91%E7%AB%99%E2%80%9C%E6%B7%98%E8%B4%9D%E7%BD%91%E2%80%9D%E3%80%91.png',
          content: ' 采用微服务架构基于 Flask 实现电商网站“淘贝网” ',
          text: ' 本课程将采用微服务架构基于 Flask 实现电商网站“淘贝网”。整个网站系统采用微服务架构，将每个业务模块独立为一个内部的微服务。内部的服务包括用户服务、商城服务、购买服务和文件服务，用户访问前端界面后，会通过组合调用各个内部的微服务接口来完成指定的操作。 ',
          number: 149,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid770606-20190830-1567130353580',
          content: ' SpringBoot + Mybatis + Thymeleaf 搭建美观实用的个人博客 ',
          text: ' 对于技术人员来说，拥有自己的个人博客应该是一件令人向往的事情，可以记录和分享自己的观点，独立开发以及独立维护一个博客网站，这种想法应该在很多人心中都有过，真的很酷，也因此我开发了 My Blog 博客系统，它是由 SpringBoot + Mybatis + Thymeleaf 等技术实现的 Java 博客系统，页面美观、功能齐全、部署简单及完善的代码，一定会给使用者无与伦比的体验。 ',
          number: 193,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid770606-20191205-1575541803352',
          content: ' Java Web 三级跳：SSM，SpringBoot 与前后端分离 ',
          text: ' Spring 是现阶段最为流行的 Java Web 框架，前后端分离架构也是现在移动应用时代的主流解决方案。本课程注重后端架构的实现，从传统的 SSM 架构到 Spring Boot 前后端分离架构，帮助大家更加深入了解 Spring 的周边生态和解决前后端分离的核心思想。 ',
          number: 220,
          color: 'red',
          paic: '训练营'
        }
      ],
      f6: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid770606-20190924-1569308986283',
          content: ' Python 异步网络编程实战 ',
          text: ' 上个世纪 90 年代随着万维网的兴起，网络编程也开始逐渐发展。本课程将介绍如何使用 Socket 创建 TCP 客户端、协程原理、Linux 系统中的五种 I/O 模型、select/poll/epoll 实现 I/O 复用，以及基于 Socket 创建同步阻塞、多线程、异步程序爬取网络图片，后半部分学习异步事件库 pyuv 以及协程框架 greenlet 和 gevent 实现异步爬虫。 ',
          number: 242,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid18510-20190717-1563357693503',
          content: ' C++ 11 从零实现 NoSQL 数据库 ',
          text: ' 本课程使用 C++ 11 实现了一个完全兼容 redis 的 kv 数据库项目——Qedis ；该项目会使用到一些 C++11 核心特性和 STL 库，并利用已有的 tcp 网络库，逐步构建出一个完全兼容 Redis 的更高性能的内存数据库',
          number: 174,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1531706079197_%E3%80%901127%E3%80%91-%E3%80%90Django%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B%E3%80%91.png',
          content: ' Django 基础教程 ',
          text: ' 本课程主要讲解了Python的Django框架的基础知识。通过学习本课程，可以熟悉Django框架的组成结构，并能在学习过程中了解Django的强大功能。 ',
          number: 15178,
          color: 'green',
          paic: '免费'
        }
      ],
      f7: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/course/1557197583122_%E3%80%901283%E3%80%91-%E3%80%90%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E5%BC%80%E6%94%BE%E5%9F%BA%E7%A1%80%E8%AF%BE%E7%A8%8B%E3%80%91.png',
          content: ' 机器学习开放基础课程 ',
          text: ' 机器学习开放基础课程是实验楼经由 Open Machine Learning Course 授权并制作的机器学习免费基础实战课。主要讲解机器学习常用的分类算法和回归算法，以及常用的数据预处理技巧。 ',
          number: 3154,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1523958570202.png',
          content: ' Pandas 百题大冲关 ',
          text: ' Pandas 是基于 NumPy 的数据处理工具，其提供了高效操作大型数据集所需的函数和方法，是数据分析中必不可少的模块。Pandas 百题大冲关共有 100 道练习题，不仅可以学习 Pandas 的使用，也是复习 Pandas 的必备宝典。 ',
          number: 9944,
          color: 'green',
          paic: '免费'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid770606-20191017-1571278748855',
          content: ' 知识图谱构建射雕三部曲人物关系 ',
          text: ' 知识图谱（Knowledge Graph）是一门前沿的交叉学科，用于将人类社会的海量知识结构化，并提供一个可理解，可解释的一个模型。本训练营将以《射雕三部曲》为例，从 0 构建起一个可以实际应用的知识图谱，在课程中你将学习 Neo4j 数据库的使用和知识图谱的构建。 ',
          number: 239,
          color: 'red',
          paic: '训练营'
        }
      ],
      f8: [
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid214893-20190618-1560847379517',
          content: ' Python 数据分析入门与进阶 ',
          text: ' 在本训练营中，我们将学习怎么样使用 Python 进行数据分析。课程将从数据分析基础开始，一步步深入讲解。从 Python 的基础用法到数据分析的各种算法，并结合各种实例，讲解数据分析过程中的方方面面。挑战参考答案：https://www.shiyanlou.com/questions/61129/ ',
          number: 4011,
          color: 'red',
          paic: '训练营'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/1492740359561.png',
          content: ' Kafka快速上手教程 ',
          text: ' 本节课将介绍 Kafka 及实现原理，然后讲解 Kafka 集成 Flume ，KafkaOffsetMonitor 安装及使用，案例演示，学习完本课程，你将对kafka有深入的了解，很快上手。 ',
          number: 2091,
          color: 'yellow',
          paic: '会员'
        },
        {
          img: 'https://dn-simplecloud.shiyanlou.com/courses/uid18510-20190718-1563414007419',
          content: ' PyTorch 入门与实战 ',
          text: ' 本课程是《深度学习原理与 PyTorch 实战》书籍的配套实践内容。《深度学习原理与 PyTorch 实战》是一本系统介绍深度学习及开源框架 PyTorch 的入门书，全书注重实战，讲解了卷积神经网络，循环神经网络，计算机视觉，迁移学习，自然语言处理等相关知识。 ',
          number: 113,
          color: 'red',
          paic: '训练营'
        }
      ]
    },
    qhDatas: {
      first: {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1547702588555_[1229]-[%E8%B5%B0%E8%BF%9B%E4%BB%A5%E5%A4%AA%E5%9D%8A%EF%BC%9A%E4%BB%8E%E5%85%A5%E9%97%A8%E5%88%B0%E5%AE%9E%E6%88%98].png',
        title: ' 走进以太坊：从入门到实战 ',
        text: ' 课程从最基础的概念开始，以使用的角度，一步一步揭开了最流行的区块链平台——以太坊（ Ethereum ）的神秘面纱。项目中涉及以太坊的基本概念、以太坊客户端的基本使用、基于 Solidity 的智能合约开发、基于 truffle 的智能合约开发与测试、基于发牌小游戏案例的以太坊 DApp 前端以及合约开发、以及智能合约在真实以太坊环境的部署。内容丰富详实，循序渐进。 ',
        tfooter: ' 区块链 '
      },
      two: {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1548491904238_[1207]-[Kubernetes%E5%85%A5%E9%97%A8%E4%B8%8E%E5%AE%9E%E6%88%98].png',
        title: ' Kubernetes 入门与实战 ',
        text: ' 本课程介绍了 Kubernetes 的核心概念和资源类型，并借助实际的实验操作来掌握它们，进而帮助我们去思考这些设计的意义以及它们所应用的业务场景。主要内容包括：Kubernetes 基础概念以及使用方式、单例应用 Pod、访问应用 Service 等。 ',
        tfooter: ' Linux Kubernetes Docker '
      }
    },
    learnDatas: [
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1555406408145_%E3%80%90%E8%B7%AF%E5%BE%84%E3%80%91-%E3%80%90Python%E7%A0%94%E5%8F%91%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%91.png',
        content: ' Python研发工程师 ',
        footer: ' 91门课程 '
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/course/1550137107333_%E3%80%90%E8%B7%AF%E5%BE%84%E3%80%91-%E3%80%90%E5%A4%A7%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%91.png',
        content: ' 大数据工程师 ',
        footer: ' 44门课程 '
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/1487741227106.png',
        content: ' Linux研发工程师 ',
        footer: ' 31门课程 '
      },
      {
        img: 'https://dn-simplecloud.shiyanlou.com/1487741005890.png',
        content: ' 新手入门 ',
        footer: ' 6门课程 '
      }
    ],
    siteDatas: [
      {
        img: 'https://static.shiyanlou.com/img/introduceContainer1.gif',
        text: ' 丰富全面的计算机实验课程 '
      },
      {
        img: 'https://static.shiyanlou.com/img/introduceContainer2.gif',
        text: ' 在线编程环境，1秒启动 '
      },
      {
        img: 'https://static.shiyanlou.com/img/introduceContainer3.gif',
        text: ' 每天一个项目课，丰富你的项目经验 '
      },
      {
        img: 'https://static.shiyanlou.com/img/introduceContainer4.gif',
        text: ' 有效学习时间，真实记录你的代码生涯 '
      }
    ]
  },
  mutations: {

  },
  actions: {

  }
})
