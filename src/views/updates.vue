<template>
    <el-breadcrumb :separator-icon="DArrowRight" >
    <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
    <el-breadcrumb-item>Updates & Fixeds</el-breadcrumb-item>
  </el-breadcrumb>
<h1>Updates and Fixeds</h1>
<p>For other project update logs, please go to the project Github. Here is only the website update log.</p>
    <el-timeline>
       <el-timeline-item timestamp="2025/12/02 3.3.2 to 3.3.3" placement="top">
      <el-card>
        <p>Fixed the issue of incorrect downloaded file size.</p>
        <h3>View old page:</h3>
        <el-link href="https://867678.xyz/" target="_blank">3.3.2 to 3.3.3</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/11/20 3.3.1 to 3.3.2" placement="top">
      <el-card>
        <p>The speed test page has been redesigned, but it is not yet available.</p>
        <p>Add a 404 page.</p>
        <h3>View old page:</h3>
        <el-link href="https://586a1502.867678.pages.dev/" target="_blank">3.3.1 to 3.3.2</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/11/18 3.3.0 to 3.3.1" placement="top">
      <el-card>
        <p>Changed logo.</p>
        <p>The unit for speed test files is now supported down to the bit.(MAX:314572000B = 300MB )</p>
        <p>Fix some minor issues.</p>
        <p>Remove the servers area; I will host any scripts I have there afterward.</p>
        <h3>View old page:</h3>
        <el-link href="https://220db2d7.867678.pages.dev/" target="_blank">3.3.0 to 3.3.1</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/11/06 3.2.9 to 3.3.0" placement="top">
      <el-card>
        <p>The myskills area now supports single-row chart display.</p>
        <p>IPERF3 support has been removed from the speedtest section; it will be redesigned to look like speedtest.net in the future.</p>
        <p>The icon positions have been adjusted to create a more consistent visual style.</p>
        <h3>View old page:</h3>
        <el-link href="https://e4f8b91c.867678.pages.dev/" target="_blank">3.2.9 to 3.3.0</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/10/26 3.2.8 to 3.2.9" placement="top">
      <el-card>
        <p>Optimized the homepage layout and added the My Skills card.(However, the icons are currently misplaced.)</p>
        <p>Redesigned the speed test page.</p>
        <p>Fixed an error that caused the package size to be too large when running npm run build.</p>
        <p>(Optimizing the package size may also optimize the website loading speed)</p>
        <p>Rearranged the project list.</p>
        <p>Re-optimize the project display page.</p>
        <h3>View old page:</h3>
        <el-link href="https://2cf9b03d.867678.pages.dev/" target="_blank">3.2.8 to 3.2.9</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/10/24 3.2.7 to 3.2.8" placement="top">
      <el-card>
        <p>The speed test interface has been significantly optimized.</p>
        <p>Fixed an issue where clicking certain hyperlinks wouldn't redirect to a new tab.</p>
        <h3>View old page:</h3>
        <el-link href="https://aa602d62.867678.pages.dev/" target="_blank">3.2.7 to 3.2.8</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/10/23 3.2.5 to 3.2.7" placement="top">
      <el-card>
        <p>Removed a server in Osaka, Japan, and celebrated the resurrection of that old friend.</p>
        <p>This time I installed a firewall for my old friend, so the traffic shouldn't be excessive.</p>
        <p>Fixed the issue of not being able to jump to the project page.</p>
        <p>Corrected the personal signature.</p>
        <h3>View old page:</h3>
        <el-link href="https://66d18145.867678.pages.dev/" target="_blank">3.2.6 to 3.2.7</el-link><el-divider direction="vertical" />
        <el-link href="https://692caca7.867678.pages.dev/" target="_blank">3.2.5 to 3.2.6</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/10/22 3.2.4 to 3.2.5" placement="top">
      <el-card>
        <p>Changed homepage logic.</p>
        <p>Numerous page logic changes.</p>
        <p>The theme now supports device-specific or manual switching.</p>
        <h3>View old page:</h3>
        <el-link href="https://ad41a936.867678.pages.dev/" target="_blank">3.2.4 to 3.2.5</el-link>
      </el-card>
      </el-timeline-item>
       <el-timeline-item timestamp="2025/10/14 3.2.3 to 3.2.4" placement="top">
      <el-card>
        <p>We are very sorry that the Osaka server has exceeded the traffic limit again, so we purchased a Tokyo machine, and the Osaka machine will not provide speed tests in the future.</p>
        <h3>View old page:</h3>
        <el-link href="https://5cf12555.867678.pages.dev/" target="_blank">3.2.3 to 3.2.4</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/10/07 3.2.2 to 3.2.3" placement="top">
      <el-card>
        <p>Move the first few updated pages to the homepage.</p>
        <h3>View old page:</h3>
        <el-link href="https://f8874326.867678.pages.dev/" target="_blank">3.2.2 to 3.2.3</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/10/06 3.2.1 to 3.2.2" placement="top">
      <el-card>
        <p>Remove the project page and move it to the homepage.</p>
        <p>Move the first few updated pages to the homepage.</p>
        <p>Removed gcore-r2.867678.xyz</p>
        <h3>View old page:</h3>
        <el-link href="https://3179447e.867678.pages.dev/" target="_blank">3.2.1 to 3.2.2</el-link>
      </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="2025/10/05 3.2.0 to 3.2.1" placement="top">
      <el-card>
        <p>Add GcoreCDN</p>
        <p>Support downloading kra files of web page logos</p>
        <p>Domain format from numbercity.iso3166.867678.xyz to numcity-iso3166.867678.xyz</p>
        <p>Added gcore-r2.867678.xyz</p>
        <h3>View old page:</h3>
        <el-link href="https://1a34d3af.867678.pages.dev/" target="_blank">3.2.0 to 3.2.1</el-link><el-divider direction="vertical" />
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
</template>
<script lang="ts" setup>
import {DArrowRight} from '@element-plus/icons-vue'
</script>