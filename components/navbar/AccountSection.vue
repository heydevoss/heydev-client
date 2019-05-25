<template>
  <div>
    <LoginButton v-if="!isAuthenticated" />
    <div class="logged-user" v-else>
      <avatar class="avatar"/>
      <span class="user--name">{{me.name || me.login}}</span>
      <LogoutButton class="logout"/>
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
  apollo: {
    me: {
      query: getUserInfo
    }
  }
}
</script>
<style lang="scss" scoped>
.avatar {
  width: 40px;
  height: 40px;
  margin-right: 5px;
}
.logged-user {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
