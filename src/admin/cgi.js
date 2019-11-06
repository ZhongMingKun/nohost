import createCgi from './ajax';

const DEFAULT_CONF = {
  timeout: 16000,
  xhrFields: {
    withCredentials: true,
  },
};

const {
  loadAllAccounts,
  loadSettings,
  setEntryRules,
  setJsonData,
  setRulesTpl,
  setTestRules,
  setPluginRules,
  setDefaultRules,
  setAuthKey,
  getFollower,
  unfollow,
  restart,
} = createCgi({
  loadAllAccounts: {
    url: 'cgi-bin/list?parsed=1',
    mode: 'cancel',
  },
  loadSettings: 'cgi-bin/admin/get-settings',
  setEntryRules: {
    url: 'cgi-bin/admin/set-entry-rules',
    type: 'post',
  },
  setJsonData: {
    url: 'cgi-bin/admin/set-json-data',
    type: 'post',
  },
  setRulesTpl: {
    url: 'cgi-bin/admin/set-rules-tpl',
    type: 'post',
  },
  setTestRules: {
    url: 'cgi-bin/admin/set-test-rules',
    type: 'post',
  },
  setDefaultRules: {
    url: 'cgi-bin/admin/set-default-rules',
    type: 'post',
  },
  setPluginRules: {
    url: 'cgi-bin/admin/set-plugin-rules',
    type: 'post',
  },
  setAuthKey: {
    url: 'cgi-bin/admin/set-auth-key',
    type: 'post',
  },
  getFollower: {
    url: 'follow',
    mode: 'ignore',
  },
  unfollow: 'unfollow',
  restart: {
    url: 'main/cgi-bin/restart',
    type: 'post',
  },
  getAdminSettings: 'main/cgi-bin/get-settings',
  setAdmin: {
    url: 'main/cgi-bin/set-admin',
    type: 'post',
  },
  setDomain: {
    url: 'main/cgi-bin/set-domain',
    type: 'post',
  },
  setToken: {
    url: 'main/cgi-bin/set-token',
    type: 'post',
  },
  setWhiteList: {
    url: 'main/cgi-bin/set-white-list',
    type: 'post',
  },
}, DEFAULT_CONF);

const getAllAccounts = (cb) => {
  loadAllAccounts((data) => {
    if (!data) {
      return setTimeout(() => getAllAccounts(cb), 1000);
    }
    cb(data);
  });
};

const getSettings = (cb) => {
  loadSettings((data) => {
    if (!data) {
      return setTimeout(() => getSettings(cb), 1000);
    }
    cb(data);
  });
};

const {
  importSessions,
  exportSessions,
} = createCgi({
  exportSessions: {
    type: 'post',
    url: 'cgi-bin/sessions/export',
  },
  importSessions: 'cgi-bin/sessions/import',
}, DEFAULT_CONF);

export {
  getAllAccounts,
  importSessions,
  exportSessions,
  getSettings,
  setEntryRules,
  setPluginRules,
  setJsonData,
  setRulesTpl,
  setTestRules,
  setDefaultRules,
  setAuthKey,
  getFollower,
  unfollow,
  restart,
};