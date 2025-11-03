<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import ierf_img1 from "@/assets/images/welfares/ierf_img1.png";
import ierf_img2 from "@/assets/images/welfares/ierf_img2.png";
import ierf_img3 from "@/assets/images/welfares/ierf_img3.png";
import ierf_img4 from "@/assets/images/welfares/ierf_img4.png";
import ierf_img5 from "@/assets/images/welfares/ierf_img5.png";
import ierf_img6 from "@/assets/images/welfares/ierf_img6.png";
import ierf_img7 from "@/assets/images/welfares/ierf_img7.png";
import ierf_img8 from "@/assets/images/welfares/ierf_img8.png";
import ierf_img9 from "@/assets/images/welfares/ierf_img9.png";
import ierf_img10 from "@/assets/images/welfares/ierf_img10.png";
import ierf_img11 from "@/assets/images/welfares/ierf_img11.png";

</script>

<template>
  <div class="ierf-container">
    <h1>IERF学位认证全步骤指南</h1>

    <p>
      部分同学在录取书第二页发现了如下字样"Bachelor's Degree Requirement : Students who are currently completing their bachelor's degree must submit official transcripts to USC showing an earning bachelor's degree prior registering for their second semester."
      这是什么意思呢？ 我们需要将本科成绩单发给学校？怎么发呢？ 对于美本的同学们来说，可以通过本科学校将成绩单发给USC官方。
      但是对于在中国国内获得本科学历的同学们呢？ 难道我们要亲自去学校办公室吗？ 如何证明本科成绩单和学位的真实性呢？
      此时，我们需要进行IERF学位认证！
    </p>

    <h2>1 什么是IERF？</h2>
    <img :src="ierf_img1" alt="IERF Image 1" class="ierf-image" />
    <p>
      IERF全称International Education Research Foundation。这是一个第三方的学位认证机构，也是USC指定的唯一学位认证机构。
      USC要求新生在第一学期结束前完成IERF学位认证。所以建议同学们在入学后尽早完成认证，以免影响后续学期的正常开展。
      官方网站：<a href="https://www.ierf.org/" target="_blank">https://www.ierf.org/</a>
    </p>

    <h2>2 IERF学位认证所需材料</h2>
    <ol>
      <li>中英文学位证书原件</li>
      <li>中英文毕业证书原件</li>
      <li>学校信封密封的中英文成绩单原件</li>
      <li>中英文学位证书复印件</li>
      <li>中英文毕业证书复印件</li>
      <li>中英文成绩单复印件</li>
      <li>
        对于已经获得的博士学位的同学，需要提交论文的扉页复印件、摘要、目录和前十页用于博士学位论文的认证
        （Copy of the title page, abstract, table of contents, and first ten pages of the dissertation for the certification of doctoral studies.）。
      </li>
      <li>若毕业证书、学位证书姓名和现有姓名不一致，需要出示姓名变更证明文件。</li>
    </ol>

    <p>
      需要注意的是，部分学校不提供英文版学位证书、英文版毕业证书、英文版成绩订单。
      但是，我们可以自行翻译上述三份文件，并加盖学校公章或学校教务处章，以证明翻译件受到官方认可。
      其次，建议将中英文成绩单用信封密封后，在信封外加盖学校公章或学校教务处骑缝章。
      相关文件将会在学位认证结束后寄回，所以不必担心。同时 建议 大家 自行准备复印件 ，委托IERF进行复印需要缴纳额外费用。
    </p>

    <p>
      除了上述文件，同学们在线申请后，还会获得 IERF给的一份"Cover Sheet" ，同学们需要将其的打印出来，
      写上自己的十位USC ID ，连同上述文件，一并邮寄到指定地址：
    </p>

    <h3>邮寄地址</h3>
    <ul>
      <li>
        <strong>快递邮寄地址（UPS、FedEx等）：</strong><br />
        IERF 6133 Bristol Parkway, #300 Culver City, CA 90230 310.258.9451
      </li>
      <li>
        <strong>普通信件邮寄地址：</strong><br />
        IERF P.O. Box 3665 Culver City, CA 90231
      </li>
    </ul>

    <h2>3 在线申请步骤</h2>
    <p>
      登录IERF官网（<a href="https://www.ierf.org/" target="_blank">https://www.ierf.org/</a>），点击“Apply Now”开始申请。共有7个步骤。
    </p>
    <img :src="ierf_img2" alt="IERF Image 2" class="ierf-image" />

    <h3>1) 基本信息</h3>
    <p>
      第一步填写个人基本信息（姓名、性别、日期、居住地址、联系方式等）。 此处 推荐同学们将居住地址填写为在美国的地址 ，这样IERF才会将认证材料即结果直接邮寄给你，
      以避免国际邮寄可能造成的丢失；而且，这样做也会让我们在第4步节省些许时间。
      需要注意的是，“How did you hear about us”一项务必选择“Educational Institution”，并在第二项选择USC，
      才能在后面选择专门为USC设计的方案和价格。图示第三项选择“Yes”，以便IERF将结果直接及发送到USC。
    </p>
    <img :src="ierf_img3" alt="IERF Image" class="ierf-image" />

    <h3>2) 教育背景</h3>
    <p>
      这一项较为简单，同学们填写本科学位就好。记得学位的英文翻译要准确哟。
    </p>
    <img :src="ierf_img4" alt="IERF Image" class="ierf-image" />

    <h3>3) 申请目的</h3>
    <p>
      这一项选择“Education”，之后选择“University(graduate)”。
    </p>
    <img :src="ierf_img5" alt="IERF Image" class="ierf-image" />
    <p>
      在这一环节，我们发现IERF提供了两种不同价格的方案。USC本身没有过多要求，因此我们选择“General”版本即可。“Detail”版本包含GPA。
    </p>
    
    <img :src="ierf_img6" alt="IERF Image" class="ierf-image" />

    <h3>4) 邮寄地址</h3>
    <p>
      这一步选择原材料及认证结果邮寄地址。首先，IERF会将一份纸质结果与认证材料一并邮寄给你。
      在“Applicant Copy”一栏，如第一步所讲，我们最好在第一步将地址填为美国居住地址，
      并在这一步选择“将申请副本及原材料寄到我的地址”，以节省一定时间。
    </p>
    <p>
      需要注意的是，寄给自己的这一份邮件务必选择“Domestic Secure Mailing”或“Domestic Next Day Delivery”。
      否则，IERF不会进行邮寄，除非你再提交一份免责声明并承担丢件损失。
    </p>
    <img :src="ierf_img7" alt="IERF Image" class="ierf-image" />
    <p>
      在“Official Agency Copy”一栏，我们选择“another recipient”。可以看到系统已经自动填写完毕。此处的邮寄选项采用“Regular Copy”即可。
    </p>
    <img :src="ierf_img8" alt="IERF Image" class="ierf-image" />

    <h3>5) 选择额外服务</h3>
    <p>
      这一步可以选择加急服务和额外服务（是否需要IERF帮你准备复印文件）。
      IERF默认会在15个工作日完成认证 ，所以除非紧急情况，也并没有必要花太多加急费用。
    </p>
    <img :src="ierf_img9" alt="IERF Image" class="ierf-image" />

    <h3>6) 核对相关信息</h3>
    <p>
      在这个环节，同学们还可以自行上传认证材料的电子版，并且对认证材料或个人情况进行额外说明。
      建议大家一定要仔细检查呀！
    </p>
    <img :src="ierf_img10" alt="IERF Image" class="ierf-image" />

    <h3>7) 付款</h3>
    <p>
      根据上述步骤，我们最后付款120刀就可以了。可以使用国内信用卡结账。
      支付完成后，IERF会给你的文件分配一个文件号（File Number），如果后续需要和IERF进行联系，请务必在联系时附上这个号码。
    </p>
    <img :src="ierf_img11" alt="IERF Image" class="ierf-image" />
    
    <h2>4 邮寄材料</h2>
    <ol>
      <li>
        在线申请完成后， IERF会给我们一份“Cover Sheet” ，我们需要将其打印出来，并 将十位USC ID写在上面 ，随认证材料 一并邮寄给IERF ，以便IERF将认证结果提供给USC。
      </li>
      <li>
        同学们可以到USC Village或学校北面的FedEx进行复印、邮寄，可以节省些许时间。
      </li>
    </ol>

    <p>
      至此，我们就完成了IERF的所有申请流程，只需要耐心等待就可以啦！
      只要我们收到了IERF寄回的原材料和认证文件副本，那我们就完成了IERF认证的所有流程。
    </p>
  </div>
</template>

<style scoped lang="scss">
.ierf-container {
  line-height: 1.8;
  padding: 2rem;
  color: #222;
  scroll-behavior: smooth;

  h1, h2, h3 {
    color: #900;
    margin-top: 1.5rem;
  }

  a {
    color: #0066cc;
    text-decoration: underline;
  }

  ol, ul {
    margin-left: 1.5rem;
  }

  li {
    margin-bottom: 0.3rem;
  }

  strong {
    color: #333;
  }
}
</style>
