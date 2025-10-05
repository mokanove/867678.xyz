<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item>Updates & Fixeds</el-breadcrumb-item>
  </el-breadcrumb>
<h1>Updates and Fixeds</h1>
    <el-timeline>
      <el-timeline-item timestamp="2025/10/02 3.2.0 to 3.2.1" placement="top">
      <el-card>
        <p>Add GcoreCDN</p>
        <p>Support downloading kra files of web page logos</p>
        <p>Domain format from numbercity.iso3166.867678.xyz to numcity-iso3166.867678.xyz</p>
        <p>Added gcore-r2.867678.xyz</p>
        <h3>View old page:</h3>
        <el-link href="https://867678.xyz/" target="_blank">3.2.0 to 3.2.1</el-link><el-divider direction="vertical" />
        <el-link href="https://989c3866.867678.pages.dev/" target="_blank">3.1.9 to 3.2.0</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/10/02 3.1.8 to 3.1.9" placement="top">
      <el-card>
        <p>Interface logic changes</p>
        <p>Added hyperlinks at the bottom of the homepage</p>
        <p>Changed R2 domain name</p>
        <p>Changed IP query API to ipinfo and deprecated api.867678.xyz</p>
        <h3>View old page:</h3>
        <el-link href="https://852fbea6.867678.pages.dev/" target="_blank">3.1.8 to 3.1.9</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/22 3.1.6 to 3.1.8" placement="top">
      <el-card>
        <p>The osaka server available in tomorrow!</p>
        <p>Domain format changed from : iso3166.three-letter.867678.xyz to: numbercity.iso3166.867678.xyz</p>
        <p>For example:1osaka.jp.867678.xyz</p>
        <p>Download page style rebuild.</p>
        <h3>View old page:</h3>
        <el-link href="https://b93f56cf.867678.pages.dev/" target="_blank">3.1.7 to 3.1.8</el-link><el-divider direction="vertical" />
        <el-link href="https://a9f14063.867678.pages.dev/" target="_blank">3.1.6 to 3.1.7</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/20 3.1.5 to 3.1.6" placement="top">
      <el-card>
        <p>The download page is finally available for downloading!</p>
        <h3>View old page:</h3>
        <el-link href="https://4cac83dd.867678.pages.dev/" target="_blank">3.1.5 to 3.1.6</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/19 3.1.4 to 3.1.5" placement="top">
      <el-card>
        <p>Renovation Server Page</p>
        <p>Optimize homepage logic</p>
        <p>Add an API to get your IP, but please rest assured that I take your privacy very seriously. You can view the source code at: https://github.com/mokanove/867678.xyz/tree/api</p>
        <h3>View old page:</h3>
        <el-link href="https://10b9e470.867678.pages.dev/" target="_blank">3.1.4 to 3.1.5</el-link>
      </el-card>
      </el-timeline-item>
       <el-timeline-item timestamp="2025/09/17 3.1.3 to 3.1.4" placement="top">
      <el-card>
        <p>Updated server status</p>
        <p>Optimized the theme switching function</p>
        <p>Fixed an issue where the buttons below the items might be misaligned</p>
        <h3>View old page:</h3>
        <el-link href="https://7d44eb6a.867678.pages.dev/" target="_blank">3.1.3 to 3.1.4</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/14 3.1.2 to 3.1.3" placement="top">
      <el-card>
        <p>This is a brand new version. I'm too lazy to write the updated content, so you can read it yourself.</p>
        <h3>View old page:</h3>
        <el-link href="https://297ca48c.867678.pages.dev/" target="_blank">3.1.2 to 3.1.3</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/13 3.1.1 to 3.1.2" placement="top">
      <el-card>
        <p>Optimized the views directory structure.</p>
        <p>Multiple logic and page refactorings , and breadcrumbs refactoring</p>
        <p>Refactoring the top navigation bar.</p>
        <h3>View old page:</h3>
        <el-link href="https://f91f965b.867678.pages.dev/" target="_blank">Fixed can't run build</el-link>
        <p>This compilation error occurs due to a code defect.</p>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/11 3.0.7 to 3.0.8" placement="top">
      <el-card>
        <p>Changed the Osaka node to Mumbai.</p>
        <p>Retake the server speed test picture.</p>
        <h3>View old page:</h3>
        <el-link href="https://5c3a275c.867678.pages.dev/" target="_blank">v3.0.7 to 3.0.8</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/10 3.0.6 to 3.0.7" placement="top">
      <el-card>
        <p>Change image hosting provider.</p>
        <p>Retake the server speed test picture.</p>
        <p>Added separator line to browse old update button.</p>
        <h3>View old page:</h3>
        <el-link href="https://c362a2b7.867678.pages.dev/" target="_blank">v3.0.6 to 3.0.7</el-link>
      </el-card>
      </el-timeline-item>
     <el-timeline-item timestamp="2025/09/08 3.0.4 to 3.0.6" placement="top">
      <el-card>
        <p>Split page jump logic & css code into a single file.</p>
        <p>Reshaped the donation function.</p>
        <p>Moved updates and fixes pages to /updates ; Moved projects files to /projects</p>
        <p>Added this website license.</p>
        <p>Added View old page.</p>
        <h3>View old page:</h3>
        <el-link href="https://e339ffeb.867678.pages.dev/" target="_blank">v3.0.4 to 3.0.5</el-link><el-divider direction="vertical" />
        <el-link href="https://e339ffeb.867678.pages.dev/" target="_blank">v3.0.5 to 3.0.6</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/07 3.0.3 to 3.0.4" placement="top">
      <el-card>
        <p>Optimize the operation logic of the menu at the top of the page.</p>
        <el-link href="https://s.867678.xyz/n/fac.kra" target="_blank">Changed a high-definition avatar, download? I chose the simplest trigger method,</el-link>
        <el-link href="https://s.867678.xyz/n/fac5.kra" target="_blank">please guess it yourself.</el-link>
        <p>Optimize the input box of tkkhs project.</p>
        <p>Now, the black and white themes will automatically switch with the operating system!</p>
        <h3>View old page:</h3>
        <el-link href="https://f537eb87.867678.pages.dev/" target="_blank">v3.0.3 to 3.0.4</el-link>
      </el-card>
      </el-timeline-item>
       <el-timeline-item timestamp="2025/09/06 2.0.6 to 3.0.3" placement="top">
      <el-card>
        <p>tkkhs has been revised again and added a dark mode, as well as a return function to the old version of the web page.</p>
        <p>The cloud-side changes are automatic compilation by Cloudflare Pages instead of the previous local manual compilation, which allows new features to be synchronized faster.</p>
        <p>The warehouse structure has been re-optimized and now uses the latest vite and element-plus.</p>
        <p>Now, server speed test images will no longer be hosted by Github (which would increase loading time) but will be hosted by Cloudflare instead.</p>
        <h3>View old page:</h3>
        <el-link href="https://fa1b2e38.867678.pages.dev/" target="_blank">2.0.6 to 2.0.7</el-link><el-divider direction="vertical" />
        <el-link href="https://e6bbd64b.867678.pages.dev/" target="_blank">The warehouse structure has been re-optimized and now uses(2.0.8)</el-link><el-divider direction="vertical" />
        <el-link href="https://1c461238.867678.pages.dev/" target="_blank">3.0.0 to 3.0.1</el-link><el-divider direction="vertical" />
        <el-link href="https://75036423.867678.pages.dev/" target="_blank">change img url(3.0.2)</el-link><el-divider direction="vertical" />
        <el-link href="https://1b9b163f.867678.pages.dev/" target="_blank">3.0.2 to 3.0.3</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/09/05" placement="top">
      <el-card>
        <p>Changed the layout so that clicking the download button now pops up a prompt.</p>
        <p>Fixed an issue where the More Info button was not working.</p>
      </el-card>
       </el-timeline-item>
       <el-timeline-item timestamp="2025/09/03" placement="top">
      <el-card>
        <p>Renovated the homepage, changed the font style, now it is more user-friendly.</p>
      </el-card>
       </el-timeline-item>
       <el-timeline-item timestamp="2025/08/31" placement="top">
      <el-card>
        <p>Renovation home and tkkhs.</p>
      </el-card>
    </el-timeline-item>
  </el-timeline>
  <el-card shadow="hover">
   <el-button type="info" @click="bak" :icon="Back">Back to homepage</el-button><el-divider direction="vertical" />
    <el-button type="success" @click="donate" :icon="Money">Donate</el-button>
    </el-card>
</template>
<script lang="ts" setup>
import { Back , Money , DArrowRight} from '@element-plus/icons-vue'
import { useBak } from '../assets/pro'
const { bak } = useBak()
import { donate } from '../assets/donate'
</script>