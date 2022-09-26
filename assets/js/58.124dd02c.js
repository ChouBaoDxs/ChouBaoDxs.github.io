(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{920:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("视频名称：扣丁学堂——Android NDK 开发"),a("br"),t._v("\n视频地址：http://www.codingke.com/v/1182-lesson-171-course"),a("br"),t._v("\n讲师：马剑威，人称威哥"),a("br"),t._v("\n我的评价：★★★★★")])]),t._v(" "),a("p",[t._v("[TOC]")]),t._v(" "),a("h2",{attrs:{id:"ndk-开发-1-ndk-开发-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ndk-开发-1-ndk-开发-2"}},[t._v("#")]),t._v(" NDK 开发 1+NDK 开发 2")]),t._v(" "),a("h3",{attrs:{id:"课程大纲"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课程大纲"}},[t._v("#")]),t._v(" 课程大纲")]),t._v(" "),a("ol",[a("li",[t._v("NDK 介绍")]),t._v(" "),a("li",[t._v("配置 NDK 开发环境")]),t._v(" "),a("li",[t._v("JNI 概述")]),t._v(" "),a("li",[t._v("JNI 程序实现步骤")])]),t._v(" "),a("h3",{attrs:{id:"ndk-介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ndk-介绍"}},[t._v("#")]),t._v(" NDK 介绍")]),t._v(" "),a("p",[t._v("对于大部分应用开发者来说可能都不怎么接触到 NDK，但如果涉及到硬件操作的话就不得不使用 NDK 了。使用 NDK 还有另一个原因，就是 C/C++的效率比较高，因此我们可以把一些耗时的操作放在 NDK 中实现。")]),t._v(" "),a("p",[t._v("NDK 是 Native Development Kit 的简称。它是一个工具集，集成了 Android 的交叉编译环境，并提供了一套比较方便的 Makefile，可以帮助开发者快速开发 C 或是 C++的动态库，并自动的将 so 和 java 程序打包成 apk，在 Android 上运行。")]),t._v(" "),a("h3",{attrs:{id:"配置-ndk-开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-ndk-开发环境"}},[t._v("#")]),t._v(" 配置 NDK 开发环境")]),t._v(" "),a("p",[t._v("下载：https://developer.android.google.cn/ndk/downloads/index.html\n配置环境变量：把 NDK 所在目录路径添加到环境变量 path 中")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export NDK_HOME=/Users/choubao/Develop/android-ndk-r18b\nexport PATH=$NDK_HOME:$PATH\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"jni-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jni-概述"}},[t._v("#")]),t._v(" JNI 概述")]),t._v(" "),a("p",[t._v("JNI 是 Java Native Interface 的缩写，中文为 Java 本地调用接口。从 Java1.1 开始，Java Native Interfase(JNI)标准称为 java 平台的一部分，它允许 Java 代码和其他语言写的代码进行交互。")]),t._v(" "),a("h3",{attrs:{id:"jni-程序实现步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jni-程序实现步骤"}},[t._v("#")]),t._v(" JNI 程序实现步骤")]),t._v(" "),a("ol",[a("li",[t._v("编写带有 native 声明的方法的 java 类")]),t._v(" "),a("li",[t._v("使用 javac 命令编译所编写的 java 类")]),t._v(" "),a("li",[t._v("然后使用 javah + java 类名生成扩展名为 h 的头文件")]),t._v(" "),a("li",[t._v("使用 C/C++实现本地方法")]),t._v(" "),a("li",[t._v("将 C/C++编写的文件生成动态链接库")]),t._v(" "),a("li",[t._v("测试")])]),t._v(" "),a("h4",{attrs:{id:"要实现的-demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#要实现的-demo"}},[t._v("#")]),t._v(" 要实现的 demo")]),t._v(" "),a("p",[t._v("功能：两个 EditText，一个 Button ，一个 TextView，进行加法计算，然而是通过调用 C 的代码计算得到结果的。")]),t._v(" "),a("ol",[a("li",[t._v("activity 代码大致如下")])]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MainActivity.java")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加载动态链接库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadLibrary")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\npubilc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("native")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AS可能会对该方法报红，可以设置->Editor->Inspections->搜索JNI把勾去掉")]),t._v("\n\npubilc "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addClick")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" num1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" etNum1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" num2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" etNum2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调用本地方法")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    tvResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tvResult"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("接下来使用"),a("code",[t._v("javah")]),t._v("命令生成 C 语言的.h 文件")])]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("cd app/src/main/java\njavah -jni com.choubao.www.ndk.MainActivity\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("然后在 java 目录下就能看到 com_choubao_www_ndk_MainActivity.h 文件了，里面的关键代码如下")]),t._v(" "),a("div",{staticClass:"language-C line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("JNIEXPORT jint JNICALL "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Java_com_choubao_www_ndk_MainActivity_add")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("JNIEnv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jobject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jint"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("接下来编写 C 代码"),a("br"),t._v("\n3.1 右键项目"),a("code",[t._v("app")]),t._v("——>New——>Folder——>JNI Folder，一路默认，在 Android 视图下这个目录名为 cpp(讲师视频中是 c)，切换到 Proejct 视图则名为 jni。"),a("br"),t._v("\n3.2 将上面生成的.h 文件复制到该 jni 目录。然后就可以删除 java 目录下的.h 文件了。\n3.3 在 jni 目录新建一个名为"),a("code",[t._v("hello.c")]),t._v("的 c 语言文件，编写以下代码：\n"),a("code",[t._v('c #include "com_choubao_www_ndk_MainActivity.h" JNIEXPORT jint JNICALL Java_com_choubao_www_ndk_MainActivity_add (JNIEnv * env, jobject obj, jint num1, jint num2){ return num1+num2; }')])]),t._v(" "),a("li",[t._v("将 c 语言代码生成动态链接库"),a("br"),t._v("\n这一步需要编写一个"),a("code",[t._v("Android.mk")]),t._v("(必须是这个名字)文件，编写规则如下：\n"),a("code",[t._v("LOCAL_PATH := $(call my-dir) //指定编译的路径 include $(CLEAR_VARS) //每个新模块的开始处，清理所有的LOCAL_XXX LOCAL_MODULE := hello //定义了当前模块(so文件)的名称 LOCAL_SRC_FILES := hello.c // 源代码文件 include $(BUILD_SHARED_LIBRARY) //说明编译的是共享库及动态链接库")]),t._v("\n我们直接在 jni 目录下新建一个"),a("code",[t._v("Android.mk")]),t._v("文件，写入以下内容：\n"),a("code",[t._v("LOCAL_PATH := $(call my-dir) include $(CLEAR_VARS) LOCAL_MODULE := hello LOCAL_SRC_FILES := hello.c include $(BUILD_SHARED_LIBRARY)")]),t._v("\n命令行需要执行：\n"),a("code",[t._v("cd app/src/main/jni ndk-build")]),t._v("\n然后就能在 libs 目录下的各个子目录里看到生成的 so 文件了，默认 so 文件名会在开头加上 lib，所以我们生成的就是"),a("code",[t._v("libhello.so")])])]),t._v(" "),a("h4",{attrs:{id:"在-android-studio-中使用自己生成的-so"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-android-studio-中使用自己生成的-so"}},[t._v("#")]),t._v(" 在 Android Studio 中使用自己生成的 so")]),t._v(" "),a("ol",[a("li",[t._v("在 local.properties 文件中添加本机 ndk 的路径："),a("code",[t._v("ndk.dir=/Users/choubao/Develop/android-ndk-r18b")])]),t._v(" "),a("li",[t._v("在 build.gradle 文件的 defaultConfig 配置中添加："),a("code",[t._v('ndk{moduleName "模块名"}')]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('defaultConfig {\n    ...\n    ndk {\n            moduleName "hello"\n    }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])]),t._v(" "),a("h4",{attrs:{id:"最后看看效果"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最后看看效果"}},[t._v("#")]),t._v(" 最后看看效果")]),t._v(" "),a("p",[t._v("以上所有步骤完成之后，运行一下 app 看看效果")]),t._v(" "),a("h4",{attrs:{id:"报错-error-your-project-contains-c-files-but-it-is-not-using-a-supported-native-build-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错-error-your-project-contains-c-files-but-it-is-not-using-a-supported-native-build-system"}},[t._v("#")]),t._v(" 报错 Error: Your project contains C++ files but it is not using a supported native build system.")]),t._v(" "),a("p",[t._v("最后我编译打包 apk 的时候报这个错，百度了一下，解决方式如下：")]),t._v(" "),a("ol",[a("li",[t._v("在"),a("code",[t._v("gradle.properties")]),t._v("中添加下面一条配置："),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Android.useDeprecatedNdk=true\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[t._v("在 app 的"),a("code",[t._v("build.gradle")]),t._v("中的 android 下添加如下配置："),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('android {\n    sourceSets {\n        main {\n            jni.srcDirs = []\n            jniLibs.srcDir "src/main/libs"\n        }\n    }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);