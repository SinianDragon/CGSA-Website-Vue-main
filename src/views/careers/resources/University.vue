<script setup lang="ts">
import { useLanguage } from "@/utils/language";
import careercenter_logo from "@/assets/logo/careercenter_logo.png";
import connectSC_logo from "@/assets/logo/connectSC_logo.png";
import viterbi_logo from "@/assets/logo/USCViterbiCC_logo.png";

const { currentLanguage } = useLanguage();
</script>

<template>
  <div class="university-section">
    <!-- Career Center -->
    <div class="schoolCard">
      <a class="schoolCard__thumbnail" target="_blank" rel="noopener noreferrer" href="https://careers.usc.edu/">
        <img :src="careercenter_logo" alt="Career Center" class="resource-img" />
      </a>
      <div class="schoolCard__info">
        <div class="schoolCard__text">
          <p>Career Center 汇集了各种求职相关资源:</p>
          <p>
            比如从 Trojans to Trojans Initiative（
            <a target="_blank" rel="noopener noreferrer"
              href="https://usc.peoplegrove.com/">https://usc.peoplegrove.com/</a>）
            里面，你能找到校友资源，并和他们建立 network。
          </p>
          <ul>
            <li>
              <a href="https://careers.usc.edu/trojans-to-trojans-initiative/">Trojans to Trojans Initiative</a>
            </li>
            <li>
              <a href="https://careers.usc.edu/students/videos/">View Career Videos</a>
              <ul>
                <li><a href="https://careers.usc.edu/students/videos/#resumecoverletter">Resume/Cover Letter</a></li>
                <li><a href="https://careers.usc.edu/students/videos/#internships">Internship</a></li>
                <li><a href="https://careers.usc.edu/students/videos/#ocr">On-Campus Recruiting</a></li>
                <li><a href="https://careers.usc.edu/students/videos/#trojantalks">Trojan Talks</a></li>
                <li><a href="https://careers.usc.edu/students/videos/#careerfair">Career Fair Success</a></li>
                <li><a href="https://careers.usc.edu/students/videos/#interviewing">Interviewing</a></li>
                <li><a href="https://careers.usc.edu/students/videos/#networking">Networking</a></li>
                <li><a href="https://careers.usc.edu/students/videos/#linkedin">LinkedIn</a></li>
                <li><a href="https://careers.usc.edu/employers/train-your-employees/">Professional Workplace Skills</a>
                </li>
                <li><a href="https://careers.usc.edu/students/videos/#finlit">Financial Literacy Conference</a></li>
              </ul>
            </li>
            <li>
              <a href="https://careers.usc.edu/students/explore-careers/">Explore Careers Related to Your Major</a>
            </li>
            <li>
              <a href="https://careers.usc.edu/students/write-a-resume/">Write a Resume &amp; Cover Letter</a>
            </li>
            <li>
              <a href="https://careers.usc.edu/students/find-a-job/">Find and Accept a Job or Internship</a>
            </li>
          </ul>
          <p>
            还有各种视频，手把手教你如何写好一份简历和 cover letter、如何找到实习、校园内的招聘活动、如何面试、如何进行 network 等。
          </p>
        </div>
      </div>
    </div>

    <hr />

    <!-- ConnectSC -->
    <div class="schoolCard">
      <a class="schoolCard__thumbnail" target="_blank" rel="noopener noreferrer"
        href="https://careers.usc.edu/connectsc/">
        <img :src="connectSC_logo" alt="ConnectSC" />
      </a>

      <div class="schoolCard__info">
        <div class="schoolCard__text">
          <p>
            ConnectSC 是一个找工作或者实习最方便的网站之一，
            大家可以在网站里找到最新招聘信息和 Trojan Talks、
            预约简历和 cover letter 修改等。
          </p>

          <ul>
            <li>
              <p>Jobs and Internships</p>
              <ul>
                <li>
                  <a href="https://usc-csm.symplicity.com/students/app/jobs/discover">Search</a>
                </li>
                <li>
                  <a
                    href="https://usc-csm.symplicity.com/students/index.php?s=jobs&amp;ss=applied&amp;mode=list&amp;subtab=nocr">My
                    Job Applications</a>
                </li>
                <li>
                  <a href="http://network.experience.com/">Extended Job Search</a>
                </li>
              </ul>
            </li>

            <li>
              <p>Events</p>
              <ul>
                <li>
                  <a href="https://usc-csm.symplicity.com/students/app/career-fairs">Career Events</a>
                </li>
                <li>
                  <a
                    href="https://usc-csm.symplicity.com/students/index.php?s=event&amp;ss=is&amp;_ksl=1&amp;mode=list">Trojan
                    Talks</a>
                </li>
                <li>
                  <a
                    href="https://usc-csm.symplicity.com/students/index.php?s=event&amp;ss=ws&amp;_ksl=1&amp;mode=list">Workshops</a>
                </li>
              </ul>
            </li>

            <li>
              <p>Advising Appointment:</p>
              工作日的周一到周五 12:00–15:00，大家都可以以 drop-in 的形式进入 USC Career Center
              为大家提供的线上简历、cover letter 批改活动，每次批改时长 10–15 分钟，
              first come, first serve。
            </li>

            <li>
              <p>Employers</p>
              <ul>
                <li>
                  <a
                    href="https://usc-csm.symplicity.com/students/index.php?s=employers&amp;mode=list&amp;ss=employers&amp;_ksl=1">All</a>
                </li>
                <li>
                  <a
                    href="https://usc-csm.symplicity.com/students/index.php?s=employers&amp;mode=list&amp;ss=favorites&amp;_ksl=1">Favorite
                    Employers</a>
                </li>
                <li>
                  <a
                    href="https://usc-csm.symplicity.com/students/index.php?s=employers&amp;mode=list&amp;ss=mini_contacts&amp;_ksl=1">Contact
                    Directory</a>
                </li>
                <li>
                  <a
                    href="https://usc-csm.symplicity.com/students/index.php?s=employers&amp;mode=list&amp;ss=fav_minicontacts&amp;_ksl=1">Favorite
                    Contacts</a>
                </li>
              </ul>
            </li>

            <li>
              <p>Resources</p>
              <ul>
                <li>
                  <a href="https://usc-csm.symplicity.com/students/app/resource/pathways">Pathways</a>
                </li>
                <li>
                  <a href="https://usc-csm.symplicity.com/students/app/document-library">Online Resources and
                    Handouts</a>
                </li>
                <li>
                  <a
                    href="https://usc-csm.symplicity.com/students/index.php?s=resource&amp;ss=video_interviews&amp;mode=list&amp;tab=recommended">Mock
                    Interviews</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <hr />

    <!-- Viterbi -->
    <div class="schoolCard">
      <a class="schoolCard__thumbnail" target="_blank" rel="noopener noreferrer" href="https://viterbicareers.usc.edu/">
        <img :src="viterbi_logo" alt="Viterbi Career Center" />
      </a>
      <div class="schoolCard__info">
        <div class="schoolCard__text">
          <p>各个学院的资源</p>
          <p>
            大家可以根据自己的情况，找到学院特有的求职资源，比如Viterbi School of Engineering的
            <a target="_blank" rel="noopener noreferrer" href="https://viterbicareers.usc.edu/viterbilink/">Viterbi
              Link</a> 
              就是一个帮助Viterbi学生和校友、mentor交流职业发展、工业、学业等各方面经验的平台。
              <p>
                在Viterbi Link里面，你可以找到适合自己的mentor, 和同学以及校友讨论求职上遇到的问题，加入不同地区的工程师Groups
              </p>
          </p>
        </div>
      </div>
    </div>

    <hr />

    <!-- Email -->
    <div class="schoolCard">
      <a class="schoolCard__thumbnail" target="_blank" rel="noopener noreferrer"
        href="https://mail.google.com/mail/u/0/">
        <img
          src="https://img.etimg.com/thumb/msid-68666283,width-640,resizemode-4,imgsize-154909/a-15-year-long-legacy.jpg"
          alt="Email" />
      </a>
      <div class="schoolCard__info">
        <div class="schoolCard__text">
          <p>学校的邮件</p>
          <p>
            邮件再多也一定要仔细查看！很多 seminar、career fair、实验室招人、校园内的工作等信息都会通过邮件通知大家。
          </p>
        </div>
      </div>
    </div>

    <hr />

    <!-- Handshake -->
    <div class="schoolCard">
      <a class="schoolCard__thumbnail" target="_blank" rel="noopener noreferrer" href="https://www.joinhandshake.com/">
        <img src="https://blog.spcollege.edu/careers-internships/wp-content/uploads/sites/22/2018/08/Handshake.jpg"
          alt="Handshake" />
      </a>
      <div class="schoolCard__info">
        <div class="schoolCard__text">
          <p>Handshake</p>
          <p>
            使用Handshake你可以搜索学校的实习或工作机会、收到直接来自于雇主的招聘和活动信息、和对你感兴趣的校友以及其他employees建立联系、通过其他学生的评论了解你想要进入的行业。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.university-section {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.schoolCard {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  &__thumbnail {
    flex-shrink: 0;

    img {
      width: 180px;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
      transition: transform 0.3s;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }

  &__info {
    flex: 1;

    .schoolCard__text {
      line-height: 1.7;
      font-size: 1rem;

      a {
        color: #007bff;
        text-decoration: underline;
      }

      ul {
        margin-left: 1.2rem;
        list-style: disc;
      }
    }
  }
}

.resource-image {
  width: 100%;
  height: 160px;
  object-fit: contain;
  display: block;
  border-radius: 8px;
  background: #fafafa;
  margin: 0 auto;
  transition: transform 0.2s ease;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 2rem 0;
}
</style>
