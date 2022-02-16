---
layout: page
title: 聊天组件
---

聊天小部件扩展了卡片组件，以创建漂亮的聊天界面。该窗口小部件由必需的消息框和联系人框（__可选__）组成。示例：

<div class="row">
  <div class="col-md-6">
    <div class="card card-primary direct-chat direct-chat-primary">
      <div class="card-header">
        <h3 class="card-title">聊天</h3>
        <div class="card-tools">
          <span data-toggle="tooltip" title="3 条新消息" class="badge badge-light">3</span>
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-toggle="tooltip" title="联系人" data-widget="chat-pane-toggle">
            <i class="fas fa-comments"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="direct-chat-messages">
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">1月23日 下午2:00</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              这个模板真的是免费的吗？太不可思议了！
            </div>
          </div>
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">1月23日 下午2:05</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              是的，确实如此！
            </div>
          </div>
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">1月23日 下午5:37</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              使用 AdminLTE 开发强大的应用！想加入吗？
            </div>
          </div>
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">1月23日 下午6:10</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              是的，我想。
            </div>
          </div>
        </div>
        <!--/.direct-chat-messages-->
        <div class="direct-chat-contacts">
          <ul class="contacts-list">
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Count Dracula
                    <small class="contacts-list-date float-right">2/28/2015</small>
                  </span>
                  <span class="contacts-list-msg">你最近怎么样？我是……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user7-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Sarah Doe
                    <small class="contacts-list-date float-right">2/23/2015</small>
                  </span>
                  <span class="contacts-list-msg">我会等……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Nadia Jolie
                    <small class="contacts-list-date float-right">2/20/2015</small>
                  </span>
                  <span class="contacts-list-msg">我会打电话给你……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user5-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Nora S. Vans
                    <small class="contacts-list-date float-right">2/10/2015</small>
                  </span>
                  <span class="contacts-list-msg">你的新……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user6-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    John K.
                    <small class="contacts-list-date float-right">1/27/2015</small>
                  </span>
                  <span class="contacts-list-msg">我能看看……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user8-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Kenneth M.
                    <small class="contacts-list-date float-right">1/4/2015</small>
                  </span>
                  <span class="contacts-list-msg">没关系我发现……</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <form action="#" method="post">
          <div class="input-group">
            <input type="text" name="message" placeholder="输入消息 ..." class="form-control">
            <span class="input-group-append">
              <button type="button" class="btn btn-primary">发送</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card card-danger direct-chat direct-chat-danger">
      <div class="card-header">
        <h3 class="card-title">聊天</h3>
        <div class="card-tools">
          <span data-toggle="tooltip" title="3 条新消息" class="badge badge-light">3</span>
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-toggle="tooltip" title="联系人" data-widget="chat-pane-toggle">
            <i class="fas fa-comments"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="direct-chat-messages">
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">1月23日 下午2:00</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              这个模板真的是免费的吗？太不可思议了！
            </div>
          </div>
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">1月23日 下午2:05</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              是的，确实如此！
            </div>
          </div>
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">1月23日 下午5:37</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              使用 AdminLTE 开发强大的应用！想加入吗？
            </div>
          </div>
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">1月23日 下午6:10</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              是的，我想。
            </div>
          </div>
        </div>
        <!--/.direct-chat-messages-->
        <div class="direct-chat-contacts">
          <ul class="contacts-list">
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Count Dracula
                    <small class="contacts-list-date float-right">2/28/2015</small>
                  </span>
                  <span class="contacts-list-msg">你最近怎么样？我是……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user7-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Sarah Doe
                    <small class="contacts-list-date float-right">2/23/2015</small>
                  </span>
                  <span class="contacts-list-msg">我会等……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Nadia Jolie
                    <small class="contacts-list-date float-right">2/20/2015</small>
                  </span>
                  <span class="contacts-list-msg">我会打电话给你……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user5-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Nora S. Vans
                    <small class="contacts-list-date float-right">2/10/2015</small>
                  </span>
                  <span class="contacts-list-msg">你的新……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user6-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    John K.
                    <small class="contacts-list-date float-right">1/27/2015</small>
                  </span>
                  <span class="contacts-list-msg">我能看看……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user8-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Kenneth M.
                    <small class="contacts-list-date float-right">1/4/2015</small>
                  </span>
                  <span class="contacts-list-msg">没关系我发现……</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <form action="#" method="post">
          <div class="input-group">
            <input type="text" name="message" placeholder="输入消息 ..." class="form-control">
            <span class="input-group-append">
              <button type="button" class="btn btn-primary">发送</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

```html
<!-- 用你想要的样式创建卡片。在这里，我们使用 card-danger -->
<!-- 然后添加 direct-chat 类并选择 direct-chat-* 相关类 -->
<!-- 相关类应与卡片匹配，因此我们使用 direct-chat-danger -->
<div class="card card-danger direct-chat direct-chat-danger">
  <div class="card-header">
    <h3 class="card-title">聊天</h3>
    <div class="card-tools">
      <span data-toggle="tooltip" title="3 条新消息" class="badge badge-light">3</span>
      <button type="button" class="btn btn-tool" data-card-widget="collapse">
        <i class="fas fa-minus"></i>
      </button>
      <button type="button" class="btn btn-tool" data-toggle="tooltip" title="联系人" data-widget="chat-pane-toggle">
        <i class="fas fa-comments"></i>
      </button>
      <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
      </button>
    </div>
  </div>
  <!-- /.card-header -->
  <div class="card-body">
    <!-- 对话在这里加载 -->
    <div class="direct-chat-messages">
      <!-- 信息。默认为左对齐 -->
      <div class="direct-chat-msg">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-left">Alexander Pierce</span>
          <span class="direct-chat-timestamp float-right">1月23日 下午2:00</span>
        </div>
        <!-- /.direct-chat-infos -->
        <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
          这个模板真的是免费的吗？太不可思议了！
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
      <!-- 消息右对齐 -->
      <div class="direct-chat-msg right">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-right">Sarah Bullock</span>
          <span class="direct-chat-timestamp float-left">1月23日 下午2:05</span>
        </div>
        <!-- /.direct-chat-infos -->
        <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
          是的，确实如此！
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
      <!-- 信息。默认为左对齐 -->
      <div class="direct-chat-msg">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-left">Alexander Pierce</span>
          <span class="direct-chat-timestamp float-right">1月23日 下午5:37</span>
        </div>
        <!-- /.direct-chat-infos -->
        <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
          使用 AdminLTE 开发强大的应用！想加入吗？
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
      <!-- 消息右对齐 -->
      <div class="direct-chat-msg right">
        <div class="direct-chat-infos clearfix">
          <span class="direct-chat-name float-right">Sarah Bullock</span>
          <span class="direct-chat-timestamp float-left">1月23日 下午6:10</span>
        </div>
        <!-- /.direct-chat-infos -->
        <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
        <!-- /.direct-chat-img -->
        <div class="direct-chat-text">
          是的，我想。
        </div>
        <!-- /.direct-chat-text -->
      </div>
      <!-- /.direct-chat-msg -->
    </div>
    <!--/.direct-chat-messages-->
    <!-- 联系人在这里加载 -->
    <div class="direct-chat-contacts">
      <ul class="contacts-list">
        <li>
          <a href="#">
            <img class="contacts-list-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                Count Dracula
                <small class="contacts-list-date float-right">2/28/2015</small>
              </span>
              <span class="contacts-list-msg">你最近怎么样？我是……</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- 结束联系人项目 -->
        <li>
          <a href="#">
            <img class="contacts-list-img" src="{{ '/assets/img/user7-128x128.jpg' | prepend: site.baseurl }}">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                Sarah Doe
                <small class="contacts-list-date float-right">2/23/2015</small>
              </span>
              <span class="contacts-list-msg">我会等……</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- 结束联系人项目 -->
        <li>
          <a href="#">
            <img class="contacts-list-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                Nadia Jolie
                <small class="contacts-list-date float-right">2/20/2015</small>
              </span>
              <span class="contacts-list-msg">我会打电话给你……</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- 结束联系人项目 -->
        <li>
          <a href="#">
            <img class="contacts-list-img" src="{{ '/assets/img/user5-128x128.jpg' | prepend: site.baseurl }}">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                Nora S. Vans
                <small class="contacts-list-date float-right">2/10/2015</small>
              </span>
              <span class="contacts-list-msg">你的新……</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- 结束联系人项目 -->
        <li>
          <a href="#">
            <img class="contacts-list-img" src="{{ '/assets/img/user6-128x128.jpg' | prepend: site.baseurl }}">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                John K.
                <small class="contacts-list-date float-right">1/27/2015</small>
              </span>
              <span class="contacts-list-msg">我能看看……</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- 结束联系人项目 -->
        <li>
          <a href="#">
            <img class="contacts-list-img" src="{{ '/assets/img/user8-128x128.jpg' | prepend: site.baseurl }}">
            <div class="contacts-list-info">
              <span class="contacts-list-name">
                Kenneth M.
                <small class="contacts-list-date float-right">1/4/2015</small>
              </span>
              <span class="contacts-list-msg">没关系我发现……</span>
            </div>
            <!-- /.contacts-list-info -->
          </a>
        </li>
        <!-- 结束联系人项目 -->
      </ul>
      <!-- /.contacts-list -->
    </div>
    <!-- /.direct-chat-pane -->
  </div>
  <!-- /.card-body -->
  <div class="card-footer">
    <form action="#" method="post">
      <div class="input-group">
        <input type="text" name="message" placeholder="输入消息 ..." class="form-control">
        <span class="input-group-append">
          <button type="button" class="btn btn-primary">发送</button>
        </span>
      </div>
    </form>
  </div>
  <!-- /.card-footer-->
</div>
<!--/.direct-chat -->
```
{: .max-height-300}

##### 聊天样式
{: .text-bold .text-dark .mt-5}

当然，你可以通过添加类 `.card-outline` 来实现聊天。以下是几个示例： 

<div class="row">
  <div class="col-md-6">
    <div class="card card-primary card-outline direct-chat direct-chat-primary">
      <div class="card-header">
        <h3 class="card-title">聊天</h3>
        <div class="card-tools">
          <span data-toggle="tooltip" title="3 条新消息" class="badge badge-light">3</span>
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-toggle="tooltip" title="联系人" data-widget="chat-pane-toggle">
            <i class="fas fa-comments"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="direct-chat-messages">
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">1月23日 下午2:00</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              这个模板真的是免费的吗？太不可思议了！
            </div>
          </div>
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">1月23日 下午2:05</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              是的，确实如此！
            </div>
          </div>
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">1月23日 下午5:37</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              使用 AdminLTE 开发强大的应用！想加入吗？
            </div>
          </div>
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">1月23日 下午6:10</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              是的，我想。
            </div>
          </div>
        </div>
        <!--/.direct-chat-messages-->
        <div class="direct-chat-contacts">
          <ul class="contacts-list">
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Count Dracula
                    <small class="contacts-list-date float-right">2/28/2015</small>
                  </span>
                  <span class="contacts-list-msg">你最近怎么样？我是……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user7-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Sarah Doe
                    <small class="contacts-list-date float-right">2/23/2015</small>
                  </span>
                  <span class="contacts-list-msg">我会等……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Nadia Jolie
                    <small class="contacts-list-date float-right">2/20/2015</small>
                  </span>
                  <span class="contacts-list-msg">我会打电话给你……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user5-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Nora S. Vans
                    <small class="contacts-list-date float-right">2/10/2015</small>
                  </span>
                  <span class="contacts-list-msg">你的新……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user6-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    John K.
                    <small class="contacts-list-date float-right">1/27/2015</small>
                  </span>
                  <span class="contacts-list-msg">我能看看……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user8-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Kenneth M.
                    <small class="contacts-list-date float-right">1/4/2015</small>
                  </span>
                  <span class="contacts-list-msg">没关系我发现……</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <form action="#" method="post">
          <div class="input-group">
            <input type="text" name="message" placeholder="输入消息 ..." class="form-control">
            <span class="input-group-append">
              <button type="button" class="btn btn-primary">发送</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <div class="card card-danger card-outline direct-chat direct-chat-danger">
      <div class="card-header">
        <h3 class="card-title">聊天</h3>
        <div class="card-tools">
          <span data-toggle="tooltip" title="3 条新消息" class="badge badge-light">3</span>
          <button type="button" class="btn btn-tool" data-card-widget="collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-toggle="tooltip" title="联系人" data-widget="chat-pane-toggle">
            <i class="fas fa-comments"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove"><i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body">
        <div class="direct-chat-messages">
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">1月23日 下午2:00</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              这个模板真的是免费的吗？太不可思议了！
            </div>
          </div>
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">1月23日 下午2:05</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              是的，确实如此！
            </div>
          </div>
          <div class="direct-chat-msg">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-left">Alexander Pierce</span>
              <span class="direct-chat-timestamp float-right">1月23日 下午5:37</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              使用 AdminLTE 开发强大的应用！想加入吗？
            </div>
          </div>
          <div class="direct-chat-msg right">
            <div class="direct-chat-infos clearfix">
              <span class="direct-chat-name float-right">Sarah Bullock</span>
              <span class="direct-chat-timestamp float-left">1月23日 下午6:10</span>
            </div>
            <img class="direct-chat-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
            <div class="direct-chat-text">
              是的，我想。
            </div>
          </div>
        </div>
        <!--/.direct-chat-messages-->
        <div class="direct-chat-contacts">
          <ul class="contacts-list">
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user1-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Count Dracula
                    <small class="contacts-list-date float-right">2/28/2015</small>
                  </span>
                  <span class="contacts-list-msg">你最近怎么样？我是……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user7-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Sarah Doe
                    <small class="contacts-list-date float-right">2/23/2015</small>
                  </span>
                  <span class="contacts-list-msg">我会等……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user3-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Nadia Jolie
                    <small class="contacts-list-date float-right">2/20/2015</small>
                  </span>
                  <span class="contacts-list-msg">我会打电话给你……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user5-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Nora S. Vans
                    <small class="contacts-list-date float-right">2/10/2015</small>
                  </span>
                  <span class="contacts-list-msg">你的新……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user6-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    John K.
                    <small class="contacts-list-date float-right">1/27/2015</small>
                  </span>
                  <span class="contacts-list-msg">我能看看……</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <img class="contacts-list-img" src="{{ '/assets/img/user8-128x128.jpg' | prepend: site.baseurl }}" alt="消息用户图像">
                <div class="contacts-list-info">
                  <span class="contacts-list-name">
                    Kenneth M.
                    <small class="contacts-list-date float-right">1/4/2015</small>
                  </span>
                  <span class="contacts-list-msg">没关系我发现……</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <form action="#" method="post">
          <div class="input-group">
            <input type="text" name="message" placeholder="输入消息 ..." class="form-control">
            <span class="input-group-append">
              <button type="button" class="btn btn-primary">发送</button>
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
