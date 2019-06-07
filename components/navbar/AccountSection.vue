<template>
  <div>
    <LoginButton v-if="!isAuthenticated" />
    <div v-else class="logged-user">
      <div class="user-infos" @click="redirectToUser">
        <avatar class="avatar" :avatar-url="me.avatarUrl" />
        <span class="user--name">{{ me.name || me.login }}</span>
      </div>
      <LogoutButton class="logout" />
    </div>
  </div>
</template>
<script>
import LoginButton from '@/components/commons/LoginButton'
import LogoutButton from '@/components/commons/LogoutButton'
import Avatar from '@/components/commons/Avatar'
import getUserInfo from '@/apollo/queries/getUserInfo.gql'

export default {
  name: 'AccountSection',
  components: {
    LoginButton,
    LogoutButton,
    Avatar
  },
  computed: {
    isAuthenticated() {
      return !!this.$apolloHelpers.getToken()
    }
  },
  methods: {
    redirectToUser() {
      this.$router.replace(`/user/${this.me.login}`)
    }
  },
  apollo: {
    me: {
      query: getUserInfo
    }
  }
}
</script>
<style lang="scss" scoped>
.user--name:hover {
  cursor: pointer;
}

.avatar {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  cursor: pointer;
}
.logged-user {
  display: flex;
  flex-direction: row;
}
.user-infos {
  display: flex;
  align-items: center;
  margin-right: 5px;
}
.logout {
  margin-left: 10px;
}

@media screen and (max-width: 820px) {
  .user--name {
    visibility: hidden;
  }
  .avatar {
    visibility: hidden;
  }
  .logout {
    margin-left: 0;
  }
}
</style>
