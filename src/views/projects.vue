<template>
  <p :to="{ path: '/' }">It just a test page , maybe have bug or more something. So , let's go to the home page</p>
    <br />
    <el-row :gutter="20" class="project-section">
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>moixa</span>
            </div>
          </template>
          <h2>A convenient and easy-to-use proxy tool.</h2>
          <p>It's multi-platform and easy to use. Its configuration files use the conveniently readable toml format. It also features perhaps the smartest DNS settings you've ever seen, saying goodbye to fakeIP bugs, DNS leaks, and other bugs caused by realIP.</p>
          <template #footer>
            <el-button @click="moixa">Developmenting...</el-button>
          </template>
        </el-card>
      </el-col>
       <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>tkkhs</span>
            </div>
          </template>
            <h2>tkkhs project.</h2>
            <p>Say what you want, it won't record it.</p>
            <el-input v-model="input" style="width: 100%" disabled placeholder="Please input"  />
          <template #footer>
            <el-button type="primary"  @click="tkkhs">TEST NOW!</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>FuestaOS</span>
            </div>
          </template>
          <h2>An operating system</h2>
          <template #footer>
            <el-button @click="fos">Developmenting...</el-button>
          </template>
        </el-card>
      </el-col>
      <el-col :span="8" :xs="24" :sm="12">
        <el-card class="project-card" shadow="hover">
          <template #header>
            <div class="card-header">
              <span>ghit</span>
            </div>
          </template>
          <h2>A version controller, similar to Git, but better.</h2>
          <template #footer>
            <el-button @click="ghit">Developmenting...</el-button>
          </template>
        </el-card>
      </el-col>
    </el-row>
</template>
