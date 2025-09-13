<el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card"  shadow="hover">
          <template #header>
            <div class="card-header">
              <span>Osaka , Kansai , Japan(OSA)</span>
            </div>
          </template>
          <el-text  class="mx-1" type="danger">The service is shut down because the traffic is about to be exhausted.Next boot time: 2025-09-23</el-text>
          <p>Domain:jp-osa.867678.xyz:81</p>
          <p>IPv4:166.88.100.243</p>
          <p>IPv6:[2400:8d60:8::c0b:1ea8]</p>
          <img src="https://raw.githubusercontent.com/mokanove/867678.xyz/refs/heads/servers/OSA.png"/>
          <template #footer>
            <el-button type="primary" @click="tenj">10MB</el-button>
            <el-button type="success" @click="onej">100MB</el-button>
            <el-button type="danger" @click="threej">300MB</el-button>
            <el-button type="info" @click="osam">More</el-button>
            <el-button @click="iperf3">iperf3</el-button>
          </template>
        </el-card>
</el-col>

