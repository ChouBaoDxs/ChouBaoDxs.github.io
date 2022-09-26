(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1006:function(e,a,t){"use strict";t.r(a);var r=t(12),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[e._v("课程地址：https://time.geekbang.org/column/intro/100063801"),t("br"),e._v("\n课程名称：容器实战高手课"),t("br"),e._v("\n主讲人：李程远，eBay 总监级工程师，云平台架构师。15+ 年 Linux 平台开发经验，8 年云平台开发经历。参与设计与开发 eBay 数据中心两代云平台，从 Openstack 到 Kubernetes，专注于云平台中 Linux 操作系统、虚拟机、容器的开发与运维。在容器领域有深入的研究和实践，主导迁移 eBay 关键应用服务从物理机到 Kubernetes 容器平台。目前带领团队建立并维护管理着一个运行了百万个容器的云平台。"),t("br"),e._v("\n课程内容：容器技术的底层实现与核心原理、20 个常见容器技术问题解决办法、系统全面的容器知识体系、常见的 Linux 内核调试工具使用场景"),t("br"),e._v("\n我的评价：★★★★☆")]),e._v(" "),t("p",[e._v("这里只是简单粗略记录一下各章总结性质的内容，比较随意。")])]),e._v(" "),t("p",[e._v("[TOC]")]),e._v(" "),t("h2",{attrs:{id:"容器的实现原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器的实现原理"}},[e._v("#")]),e._v(" 容器的实现原理")]),e._v(" "),t("p",[t("strong",[e._v("Namespace帮助容器实现各种计算资源的隔离，Cgroups主要对容器使用某种资源量的多少做一个限制。")])]),e._v(" "),t("h2",{attrs:{id:"为什么我在容器中不能kill-1号进程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么我在容器中不能kill-1号进程"}},[e._v("#")]),e._v(" 为什么我在容器中不能kill 1号进程？")]),e._v(" "),t("ol",[t("li",[t("strong",[e._v("在容器中，1号进程永远不会响应SIGKILL和SIGSTOP这两个特权信号；")])]),e._v(" "),t("li",[t("strong",[e._v("对于其他的信号，如果用户自己注册了handler，1号进程可以响应。")])])]),e._v(" "),t("h2",{attrs:{id:"为什么在停止一个容器的时候-容器init进程收到的sigterm信号-而容器中其他进程却会收到sigkill信号呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么在停止一个容器的时候-容器init进程收到的sigterm信号-而容器中其他进程却会收到sigkill信号呢"}},[e._v("#")]),e._v(" 为什么在停止一个容器的时候，容器init进程收到的SIGTERM信号，而容器中其他进程却会收到SIGKILL信号呢？")]),e._v(" "),t("p",[e._v("Containerd在停止容器的时候，就会向容器的init进程发送一个SIGTERM信号。在init进程退出之后，容器内的其他进程也都立刻退出了。不过不同的是，init进程收到的是SIGTERM信号，而其他进程收到的是SIGKILL信号。")]),e._v(" "),t("p",[e._v("当Linux进程收到SIGTERM信号并且使进程退出，这时Linux内核对处理进程退出的入口点就是do_exit()函数，do_exit()函数中会释放进程的相关资源，比如内存，文件句柄，信号量等等。")]),e._v(" "),t("p",[e._v("在做完这些工作之后，它会调用一个exit_notify()函数，用来通知和这个进程相关的父子进程等。")]),e._v(" "),t("p",[e._v("对于容器来说，还要考虑Pid Namespace里的其他进程。这里调用的就是 zap_pid_ns_processes()这个函数，而在这个函数中，如果是处于退出状态的init进程，它会向Namespace中的其他进程都发送一个SIGKILL信号。")]),e._v(" "),t("h3",{attrs:{id:"那么我们在这里明确一下-怎么解决停止容器的时候-容器内应用程序被强制杀死的问题呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#那么我们在这里明确一下-怎么解决停止容器的时候-容器内应用程序被强制杀死的问题呢"}},[e._v("#")]),e._v(" 那么我们在这里明确一下，怎么解决停止容器的时候，容器内应用程序被强制杀死的问题呢？")]),e._v(" "),t("p",[t("strong",[e._v("解决的方法就是在容器的init进程中对收到的信号做个转发，发送到容器中的其他子进程，这样容器中的所有进程在停止时，都会收到SIGTERM，而不是SIGKILL信号了。")])]),e._v(" "),t("h2",{attrs:{id:"资源限制的-limit-和-request-含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#资源限制的-limit-和-request-含义"}},[e._v("#")]),e._v(" 资源限制的 Limit 和 Request 含义")]),e._v(" "),t("p",[t("strong",[e._v("Limit CPU就是容器所在Cgroup控制组中的CPU上限值，Request CPU的值就是控制组中的cpu.shares的值。")])]),e._v(" "),t("h2",{attrs:{id:"查看容器中进程的cpu使用率"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看容器中进程的cpu使用率"}},[e._v("#")]),e._v(" 查看容器中进程的CPU使用率")]),e._v(" "),t("p",[e._v('在容器中运行top命令，虽然可以看到容器中每个进程的CPU使用率，但是top中"%Cpu(s)"那一行中显示的数值，并不是这个容器的CPU整体使用率，而是容器宿主机的CPU使用率。')]),e._v(" "),t("p",[e._v("Linux里获取CPU使用率的工具，比如top，都是通过读取proc文件系统下的stat文件来得到CPU使用了多少ticks。而这里的ticks，是Linux操作系统里的一个时间单位，可以理解成类似秒，毫秒的概念。")]),e._v(" "),t("p",[e._v("对于每个进程来说，它的stat文件是/proc/[pid]/stat，里面包含了进程用户态和内核态的ticks数目；对于整个节点，它的stat文件是 /proc/stat，里面包含了user/system/nice/idle/iowait等不同CPU开销类型的ticks。")]),e._v(" "),t("p",[t("strong",[e._v("由于/proc/stat文件是整个节点全局的状态文件，不属于任何一个Namespace，因此在容器中无法通过读取/proc/stat文件来获取单个容器的CPU使用率。")])]),e._v(" "),t("p",[e._v("所以要得到单个容器的CPU使用率，我们可以从CPU Cgroup每个控制组里的统计文件cpuacct.stat中获取。 "),t("strong",[e._v("单个容器CPU使用率=((utime_2 – utime_1) + (stime_2 – stime_1)) * 100.0 / (HZ * et * 1 )。")])]),e._v(" "),t("h2",{attrs:{id:"top-命令显示的-load-average-含义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#top-命令显示的-load-average-含义"}},[e._v("#")]),e._v(" top 命令显示的 Load Average 含义")]),e._v(" "),t("p",[e._v("平均负载统计了这两种情况的进程：")]),e._v(" "),t("p",[e._v("第一种是Linux进程调度器中可运行队列（Running Queue）一段时间（1分钟，5分钟，15分钟）的进程平均数。")]),e._v(" "),t("p",[e._v("第二种是Linux进程调度器中休眠队列（Sleeping Queue）里的一段时间的TASK_UNINTERRUPTIBLE状态下的进程平均数。")]),e._v(" "),t("p",[e._v("所以，最后的公式就是： "),t("strong",[e._v("Load Average=可运行队列进程平均数+休眠队列中不可打断的进程平均数")])]),e._v(" "),t("p",[e._v("如果打个比方来说明Load Average的统计原理。你可以想象每个CPU就是一条道路，每个进程都是一辆车，怎么科学统计道路的平均负载呢？就是看单位时间通过的车辆，一条道上的车越多，那么这条道路的负载也就越高。")]),e._v(" "),t("p",[e._v("此外，Linux计算系统负载的时候，还额外做了个补丁把TASK_UNINTERRUPTIBLE状态的进程也考虑了，这个就像道路中要把红绿灯情况也考虑进去。一旦有了红灯，汽车就要停下来排队，那么即使道路很空，但是红灯多了，汽车也要排队等待，也开不快。")]),e._v(" "),t("h2",{attrs:{id:"为什么会出现-cpu-usage-低-但是-load-average-很高的情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现-cpu-usage-低-但是-load-average-很高的情况"}},[e._v("#")]),e._v(" 为什么会出现 CPU Usage 低，但是 Load Average 很高的情况？")]),e._v(" "),t("p",[t("strong",[e._v("Linux下的Load Averge不仅仅计算了CPU Usage的部分，它还计算了系统中TASK_UNINTERRUPTIBLE状态的进程数目。")])]),e._v(" "),t("p",[e._v("如果Load Average值升高，应用的性能已经下降了，真正的原因是什么？问题就出在TASK_UNINTERRUPTIBLE状态的进程上了。只要运行 "),t("code",[e._v("ps aux | grep “ D ”")]),e._v(' ，就可以看到容器中有多少TASK_UNINTERRUPTIBLE状态（在ps命令中这个状态的进程标示为"D"状态）的进程，D进程过多会导致 Load Average 升高。')]),e._v(" "),t("p",[t("strong",[e._v("无论是对disk I/O的访问还是对信号量的访问，都是对Linux系统里的资源的一种竞争。")]),e._v(" 当进程处于D状态时，就说明进程还没获得资源，这会在应用程序的最终性能上体现出来，也就是说用户会发觉应用的性能下降了。")]),e._v(" "),t("p",[e._v("为什么CPU Cgroups不能解决这个问题呢？就是因为Cgroups更多的是以进程为单位进行隔离，而D状态进程是内核中系统全局资源引入的，所以Cgroups影响不了它。")]),e._v(" "),t("p",[e._v("所以我们可以做的是，在生产环境中监控容器的宿主机节点里D状态的进程数量，然后对D状态进程数目异常的节点进行分析，比如磁盘硬件出现问题引起D状态进程数目增加，这时就需要更换硬盘。")]),e._v(" "),t("h2",{attrs:{id:"oom-killer和memory-cgroup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#oom-killer和memory-cgroup"}},[e._v("#")]),e._v(" OOM Killer和Memory Cgroup")]),e._v(" "),t("p",[e._v("OOM Killer这个行为在Linux中很早就存在了，它其实是一种内存过载后的保护机制，通过牺牲个别的进程，来保证整个节点的内存不会被全部消耗掉。")]),e._v(" "),t("p",[e._v("在Cgroup的概念出现后，Memory Cgroup中每一个控制组可以对一组进程限制内存使用量，一旦所有进程使用内存的总量达到限制值，在缺省情况下，就会触发OOM Killer，控制组里的“某个进程”就会被杀死。")]),e._v(" "),t("p",[e._v("杀掉“某个进程”的选择标准，涉及到内核函数oom_badness()。具体的计算方法是 ： "),t("strong",[e._v("系统总的可用页面数乘以进程的OOM校准值oom_score_adj，再加上进程已经使用的物理页面数，计算出来的值越大，那么这个进程被OOM Kill的几率也就越大。")])]),e._v(" "),t("p",[e._v("Memory Cgroup里最基本的三个参数，分别是")]),e._v(" "),t("ul",[t("li",[e._v("memory.limit_in_bytes：直接限制控制组里所有进程可使用内存的最大值。")]),e._v(" "),t("li",[e._v("memory.oom_control：当控制组内的进程内存使用达到上限时，这个参数决定会不会触发 OOM Killer，默认会触发。如果设置为了不触发，就会影响到控制组中正在申请物理内存页面的进程。这些进程会处于一个停止状态，不能往下运行了。")]),e._v(" "),t("li",[e._v("memory.usage_in_bytes：只读参数，当前控制组内所有进程使用内存和上面 limit 的比值，越接近1越容易 OOM。")])]),e._v(" "),t("h2",{attrs:{id:"内存-rss-resident-set-size-和-page-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内存-rss-resident-set-size-和-page-cache"}},[e._v("#")]),e._v(" 内存：RSS(Resident Set Size) 和 Page Cache")]),e._v(" "),t("p",[e._v("容器的Memory Cgroup在统计每个控制组的内存使用时包含了两部分，RSS和Page Cache。")]),e._v(" "),t("p",[e._v("RSS是每个进程实际占用的物理内存，它包括了进程的代码段内存，进程运行时需要的堆和栈的内存，这部分内存是进程运行所必须的。")]),e._v(" "),t("p",[e._v("Page Cache是进程在运行中读写磁盘文件后，作为Cache而继续保留在内存中的，它的目的是 "),t("strong",[e._v("为了提高磁盘文件的读写性能。")])]),e._v(" "),t("p",[e._v("当节点的内存紧张或者Memory Cgroup控制组的内存达到上限的时候，Linux会对内存做回收操作，这个时候Page Cache的内存页面会被释放，这样空出来的内存就可以分配给新的内存申请。")]),e._v(" "),t("p",[e._v("正是Page Cache内存的这种Cache的特性，对于那些有频繁磁盘访问容器，我们往往会看到它的内存使用率一直接近容器内存的限制值（memory.limit_in_bytes）。但是这时候，我们并不需要担心它内存的不够， 我们在判断一个容器的内存使用状况的时候，可以把Page Cache这部分内存使用量忽略，而更多的考虑容器中RSS的内存使用量。")]),e._v(" "),t("h2",{attrs:{id:"在容器中是否可以使用swap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在容器中是否可以使用swap"}},[e._v("#")]),e._v(" 在容器中是否可以使用Swap？")]),e._v(" "),t("p",[e._v("只要在宿主机节点上打开Swap空间，在容器中就是可以用到Swap的。但出现的问题是在同一个宿主机上，对于不需要使用swap的容器， 它的Memory Cgroups的限制也失去了作用。")]),e._v(" "),t("p",[e._v("swappiness参数值的作用是，在系统里有Swap空间之后，当系统需要回收内存的时候，是优先释放Page Cache中的内存，还是优先释放匿名内存（也就是写入Swap）。")]),e._v(" "),t("p",[e._v("swappiness的取值范围在0到100之间，我们可以记住下面三个值：")]),e._v(" "),t("ul",[t("li",[e._v("值为100的时候， 释放Page Cache和匿名内存是同等优先级的。")]),e._v(" "),t("li",[e._v("值为60，这是大多数Linux系统的缺省值，这时候Page Cache的释放优先级高于匿名内存的释放。")]),e._v(" "),t("li",[e._v("值为0的时候，当系统中空闲内存低于一个临界值的时候，仍然会释放匿名内存并把页面写入Swap空间。")])]),e._v(" "),t("p",[e._v("swappiness参数除了在proc文件系统下有个全局的值外，在每个Memory Cgroup控制组里也有一个memory.swappiness，那它们有什么不同呢？")]),e._v(" "),t("ul",[t("li",[e._v("不同就是每个Memory Cgroup控制组里的swappiness参数值为0的时候，就可以让控制组里的内存停止写入Swap。这样一来，有了memory.swappiness这个参数后，需要使用Swap和不需要Swap的容器就可以在同一个宿主机上同时运行了，这样对于硬件资源的利用率也就更高了。")])]),e._v(" "),t("h2",{attrs:{id:"容器的文件系统-overlayfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器的文件系统-overlayfs"}},[e._v("#")]),e._v(" 容器的文件系统 OverlayFS")]),e._v(" "),t("p",[t("strong",[e._v("减少相同镜像文件在同一个节点上的数据冗余，可以节省磁盘空间，也可以减少镜像文件下载占用的网络资源。")])]),e._v(" "),t("p",[e._v("作为容器文件系统，UnionFS通过多个目录挂载的方式工作。OverlayFS就是UnionFS的一种实现，是目前主流Linux发行版本中缺省使用的容器文件系统。")]),e._v(" "),t("p",[e._v("OverlayFS也是把多个目录合并挂载，被挂载的目录分为两大类：lowerdir和upperdir。")]),e._v(" "),t("p",[e._v("lowerdir允许有多个目录，在被挂载后，这些目录里的文件都是不会被修改或者删除的，也就是只读的；upperdir只有一个，不过这个目录是可读写的，挂载点目录中的所有文件修改都会在upperdir中反映出来。")]),e._v(" "),t("p",[e._v("容器的镜像文件中各层正好作为OverlayFS的lowerdir的目录，然后加上一个空的upperdir一起挂载好后，就组成了容器的文件系统。")]),e._v(" "),t("h2",{attrs:{id:"限制容器使用的磁盘大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#限制容器使用的磁盘大小"}},[e._v("#")]),e._v(" 限制容器使用的磁盘大小")]),e._v(" "),t("p",[e._v("OverlayFS自己没有专门的特性，可以限制文件数据写入量。这时我们通过实际试验找到了解决思路：依靠底层文件系统的Quota特性来限制OverlayFS的upperdir目录的大小，这样就能实现限制容器写磁盘的目的。")]),e._v(" "),t("p",[e._v("底层文件系统XFS Quota的Project模式，能够限制一个目录的文件写入量，这个功能具体是通过这两个步骤实现：")]),e._v(" "),t("p",[e._v("第一步，给目标目录打上一个Project ID。")]),e._v(" "),t("p",[e._v("第二步，给这个Project ID在XFS文件系统中设置一个写入数据块的限制。")]),e._v(" "),t("p",[e._v("Docker正是使用了这个方法，也就是 "),t("strong",[e._v("用XFS Quota来限制OverlayFS的upperdir目录")]),e._v("，通过这个方式控制容器OverlayFS的根目录大小。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("docker run")]),e._v(" 启动容器的时候，加上一个参数 "),t("code",[e._v("--storage-opt size= <SIZE>")]),e._v(" ，就能限制住容器OverlayFS文件系统可写入的最大数据量了。")])]),e._v(" "),t("p",[e._v("当我们理解了这个方法后，对于不是用Docker启动的容器，比如直接由containerd启动起来的容器，也可以自己实现XFS Quota限制upperdir目录。这样就能有效控制容器对OverlayFS的写数据操作，避免宿主机的磁盘被写满。")]),e._v(" "),t("h2",{attrs:{id:"容器磁盘限速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器磁盘限速"}},[e._v("#")]),e._v(" 容器磁盘限速")]),e._v(" "),t("p",[e._v("衡量磁盘性能的 "),t("strong",[e._v("两个常见的指标IOPS和吞吐量（Throughput）")])]),e._v(" "),t("ul",[t("li",[e._v("IOPS是Input/Output Operations Per Second的简称，也就是每秒钟磁盘读写的次数，这个数值越大，当然也就表示性能越好。")]),e._v(" "),t("li",[e._v("吞吐量（Throughput）是指每秒钟磁盘中数据的读取量，一般以MB/s为单位。这个读取量可以叫作吞吐量，有时候也被称为带宽（Bandwidth）。")]),e._v(" "),t("li",[e._v("IOPS和吞吐量之间是有关联的，在IOPS固定的情况下，如果读写的每一个数据块越大，那么吞吐量也越大，它们的关系大概是这样的：吞吐量=数据块大小*IOPS。")])]),e._v(" "),t("p",[e._v("Cgroup V1的blkiio控制子系统，可以用来限制容器中进程的读写的IOPS和吞吐量（Throughput），但是它只能对于Direct I/O的读写文件做磁盘限速，对Buffered I/O的文件读写，它无法进行磁盘限速。")]),e._v(" "),t("p",[t("strong",[e._v("这是因为Buffered I/O会把数据先写入到内存Page Cache中，然后由内核线程把数据写入磁盘，而Cgroup v1 blkio的子系统独立于memory 子系统，无法统计到由Page Cache刷入到磁盘的数据量。")])]),e._v(" "),t("p",[e._v("这个Buffered I/O无法被限速的问题，在Cgroup v2里被解决了。Cgroup v2从架构上允许一个控制组里有多个子系统协同运行，这样在一个控制组里只要同时有io和Memory子系统，就可以对Buffered I/O 作磁盘读写的限速。")]),e._v(" "),t("p",[e._v("虽然Cgroup v2 解决了Buffered I/O 磁盘读写限速的问题，但是在现实的容器平台上也不是能够立刻使用的，还需要等待一段时间。目前从runC、containerd到Kubernetes都是刚刚开始支持Cgroup v2，而对生产环境中原有运行Cgroup v1的节点要迁移转化成Cgroup v2需要一个过程。")]),e._v(" "),t("h2",{attrs:{id:"容器写入文件速度波动"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器写入文件速度波动"}},[e._v("#")]),e._v(" 容器写入文件速度波动")]),e._v(" "),t("p",[e._v("容器中用Buffered I/O方式写文件的时候，会出现写入时间波动的问题。")]),e._v(" "),t("p",[e._v("Buffered I/O方式对于写入文件会先写到内存里，这样就产生了dirty pages，所以我们先研究了一下Linux对dirty pages的回收机制是否会影响到容器中写入数据的波动。")]),e._v(" "),t("p",[e._v("在这里我们最主要的是理解这两个参数， "),t("strong",[e._v("dirty_background_ratio 和 dirty_ratio")]),e._v("，这两个值都是相对于节点可用内存的百分比值。")]),e._v(" "),t("p",[t("strong",[e._v("当dirty pages数量超过dirty_background_ratio对应的内存量的时候，内核flush线程就会开始把dirty pages写入磁盘; 当dirty pages数量超过dirty_ratio对应的内存量，这时候程序写文件的函数调用write()就会被阻塞住，直到这次调用的dirty pages全部写入到磁盘。")])]),e._v(" "),t("p",[e._v("在节点是大内存容量，并且dirty_ratio为系统缺省值20%，dirty_background_ratio是系统缺省值10%的情况下，我们通过观察 /proc/vmstat中的nr_dirty数值可以发现，dirty pages不会阻塞进程的Buffered I/O写文件操作。")]),e._v(" "),t("p",[e._v("所以我们做了另一种尝试，使用perf和ftrace工具对容器中的写文件进程进行profile。我们用perf得到了系统调用write()在内核中的一系列子函数调用，再用ftrace来查看这些子函数的调用时间。")]),e._v(" "),t("p",[t("strong",[e._v("根据ftrace的结果，我们发现写数据到Page Cache的时候，需要不断地去释放原有的页面，这个时间开销是最大的。造成容器中Buffered I/O write()不稳定的原因，正是容器在限制内存之后，Page Cache的数量较小并且不断申请释放。")])]),e._v(" "),t("p",[e._v("其实这个问题也提醒了我们：在对容器做Memory Cgroup限制内存大小的时候，不仅要考虑容器中进程实际使用的内存量，还要考虑容器中程序I/O的量，合理预留足够的内存作为Buffered I/O 的Page Cache。")]),e._v(" "),t("p",[e._v("比如，如果知道需要反复读写文件的大小，并且在内存足够的情况下，那么Memory Cgroup的内存限制可以超过这个文件的大小。")]),e._v(" "),t("p",[e._v("还有一个解决思路是，我们在程序中自己管理文件的cache并且调用Direct I/O来读写文件，这样才会对应用程序的性能有一个更好的预期。")]),e._v(" "),t("h2",{attrs:{id:"network-namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#network-namespace"}},[e._v("#")]),e._v(" Network Namespace")]),e._v(" "),t("p",[e._v("Network Namespace可以隔离网络设备，ip协议栈，ip路由表，防火墙规则，以及可以显示独立的网络状态信息。")]),e._v(" "),t("p",[e._v("我们可以通过clone()或者unshare()系统调用来建立新的Network Namespace。")]),e._v(" "),t("p",[e._v('此外，还有一些工具"ip""netns""unshare""lsns"和"nsenter"，也可以用来操作Network Namespace。')]),e._v(" "),t("p",[e._v("接着我们分析了如何修改普通容器（非privileged）的网络参数。")]),e._v(" "),t("p",[e._v("由于安全的原因，普通容器的/proc/sys是read-only mount的，所以在容器启动以后，我们无法在容器内部修改/proc/sys/net下网络相关的参数。")]),e._v(" "),t("p",[e._v("这时可行的方法是 "),t("strong",[e._v("通过runC sysctl相关的接口，在容器启动的时候对容器内的网络参数做配置。")])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("docker run -d --name net_para --sysctl net.ipv4.tcp_keepalive_time=600 centos:8.1.1911 sleep 3600")])])]),e._v(" "),t("p",[e._v('这样一来，想要修改网络参数就可以这么做：如果是使用Docker，我们可以加上"—sysctl"这个参数；而如果使用Kubernetes的话，就需要用到"allowed unsaft sysctl"这个特性了。')]),e._v(" "),t("h2",{attrs:{id:"容器如何与外部通讯"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器如何与外部通讯"}},[e._v("#")]),e._v(" 容器如何与外部通讯")]),e._v(" "),t("p",[e._v("解决容器与外界通讯的问题，一共需要完成两步。第一步是，怎么让数据包从容器的Network Namespace发送到Host Network Namespace上；第二步，数据包到了Host Network Namespace之后，还需要让它可以从宿主机的eth0发送出去。")]),e._v(" "),t("p",[e._v("我们想让数据从容器Netowrk Namespace发送到Host Network Namespace，可以用配置一对veth虚拟网络设备的方法实现。而让数据包从宿主机的eth0发送出去，就用可bridge+nat的方式完成。")]),e._v(" "),t("h2",{attrs:{id:"容器的网络延时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器的网络延时"}},[e._v("#")]),e._v(" 容器的网络延时")]),e._v(" "),t("p",[e._v("容器通常缺省使用veth虚拟网络接口，不过veth接口会有比较大的网络延时。我们可以使用netperf这个工具来比较网络延时，相比物理机上的网络延时，使用veth接口容器的网络延时会增加超过10%。")]),e._v(" "),t("p",[e._v("我们通过对veth实现的代码做分析，可以看到由于veth接口是成对工作， "),t("strong",[e._v("在对外发送数据的时候，peer veth接口都会raise softirq来完成一次收包操作，这样就会带来数据包处理的额外开销。")])]),e._v(" "),t("p",[e._v("如果要减小容器网络延时，就可以给容器配置ipvlan/macvlan的网络接口来替代veth网络接口。Ipvlan/macvlan直接在物理网络接口上虚拟出接口，在发送对外数据包的时候可以直接通过物理接口完成，没有节点内部类似veth的那种softirq的开销。 "),t("strong",[e._v("容器使用ipvlan/maclan的网络接口，它的网络延时可以非常接近物理网络接口的延时。")])]),e._v(" "),t("p",[e._v("对于延时敏感的应用程序，我们可以考虑使用ipvlan/macvlan网络接口的容器。不过，由于ipvlan/macvlan网络接口直接挂载在物理网络接口上，对于需要使用iptables规则的容器，比如Kubernetes里使用service的容器，就不能工作了。这就需要你结合实际应用的需求做个判断，再选择合适的方案。")]),e._v(" "),t("h2",{attrs:{id:"容器网络包乱序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器网络包乱序"}},[e._v("#")]),e._v(" 容器网络包乱序")]),e._v(" "),t("p",[e._v("我们今天讨论的是容器中网络包乱序引起重传的问题。")]),e._v(" "),t("p",[e._v("由于在容器平台中看到大部分的重传是快速重传（fast retransmits），我们先梳理了什么是快速重传。快速重传的基本定义是： "),t("strong",[e._v("如果发送端收到3个重复的ACK，那么发送端就可以立刻重新发送ACK对应的下一个数据包，而不用等待发送超时。")])]),e._v(" "),t("p",[e._v("不过我们在Linux系统上还会看到发送端收到一个重复的ACK就快速重传的，这是因为Linux下对SACK做了一个特别的判断之后，就可以立刻重传数据包。")]),e._v(" "),t("p",[e._v("我们再对容器云平台中的快速重传做分析，就会发现这些重传大部分是由包的乱序触发的。")]),e._v(" "),t("p",[e._v("通过对容器veth网络接口进一步研究，我们知道它可能会增加数据包乱序的几率。同时在这个分析过程中，我们也看到了Linux网络RPS的特性。")]),e._v(" "),t("p",[t("strong",[e._v("RPS和RSS的作用类似，都是把数据包分散到更多的CPU上进行处理，使得系统有更强的网络包处理能力。它们的区别是RSS工作在网卡的硬件层，而RPS工作在Linux内核的软件层。")])]),e._v(" "),t("p",[e._v("在把数据包分散到各个CPU时，RPS保证了同一个数据流是在一个CPU上的，这样就可以有效减少包的乱序。那么我们可以把RPS的这个特性配置到veth网络接口上，来减少数据包乱序的几率。")]),e._v(" "),t("p",[e._v("不过，我这里还要说明的是，RPS的配置还是会带来额外的系统开销，在某些网络环境中会引起softirq CPU使用率的增大。那接口要不要打开RPS呢？这个问题你需要根据实际情况来做个权衡。")]),e._v(" "),t("p",[e._v("同时你还要注意，TCP的乱序包，并不一定都会产生数据包的重传。想要减少网络数据包的重传，我们还可以考虑协议栈中其他参数的设置，比如/proc/sys/net/ipv4/tcp_reordering。")]),e._v(" "),t("h2",{attrs:{id:"linux-capabilities"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-capabilities"}},[e._v("#")]),e._v(" Linux capabilities")]),e._v(" "),t("p",[t("strong",[e._v("Linux capabilities就是把Linux root用户原来所有的特权做了细化，可以更加细粒度地给进程赋予不同权限。")])]),e._v(" "),t("p",[e._v("对于Linux中的每一个特权操作都有一个对应的capability，对于一个capability，有的对应一个特权操作，有的可以对应很多个特权操作。")]),e._v(" "),t("p",[e._v("每个Linux进程有5个capabilities集合参数，其中Effective集合里的capabilities决定了当前进程可以做哪些特权操作，而其他集合参数会和应用程序文件的capabilities集合参数一起来决定新启动程序的capabilities集合参数。")]),e._v(" "),t("p",[e._v('对于容器的root用户，缺省只赋予了15个capabilities。如果我们发现容器中进程的权限不够，就需要分析它需要的最小capabilities集合，而不是直接赋予容器"privileged"。')]),e._v(" "),t("p",[e._v('因为"privileged"包含了所有的Linux capabilities, 这样"privileged"就可以轻易获取宿主机上的所有资源，这会对宿主机的安全产生威胁。所以，我们要根据容器中进程需要的最少特权来赋予capabilities。')]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# docker run --name iptables --privileged -it registry/iptables:v1 bash # 尽量避免 --privileged")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Docker 源码，当指定 privileged 时会获取所有权限")]),e._v(" "),t("div",{staticClass:"language-go line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-go"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("if")]),e._v(" ec"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Privileged "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Capabilities "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" caps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("GetAllCapabilities")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("比如容器里需要使用iptables。因为使用iptables命令，只需要设置CAP_NET_ADMIN这个capability就行。那么我们只要在运行Docker的时候，给这个容器再多加一个NET_ADMIN参数就可以了。")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# docker run --name iptables --cap-add NET_ADMIN -it registry/iptables:v1 ")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"容器用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器用户"}},[e._v("#")]),e._v(" 容器用户")]),e._v(" "),t("p",[e._v("尽管容器中root用户的Linux capabilities已经减少了很多，但是在没有User Namespace的情况下，容器中root用户和宿主机上的root用户的uid是完全相同的，一旦有软件的漏洞，容器中的root用户就可以操控整个宿主机。")]),e._v(" "),t("p",[t("strong",[e._v("为了减少安全风险，业界都是建议在容器中以非root用户来运行进程。")]),e._v(" 不过在没有User Namespace的情况下，在容器中使用非root用户，对于容器云平台来说，对uid的管理会比较麻烦。")]),e._v(" "),t("p",[e._v("所以，我们还是要分析一下User Namespace，它带来的好处有两个。一个是把容器中root用户（uid 0）映射成宿主机上的普通用户，另外一个好处是在云平台里对于容器uid的分配要容易些。")]),e._v(" "),t("p",[e._v("除了在容器中以非root用户来运行进程外，Docker和podman都支持了rootless container，也就是说它们都可以以非root用户来启动和管理容器，这样就进一步降低了容器的安全风险。")])])}),[],!1,null,null,null);a.default=s.exports}}]);