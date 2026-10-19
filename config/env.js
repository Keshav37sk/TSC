const environments = {

    stage1: {
        baseUrl: "https://stage1.tropicalsmoothiecafe.com"
    },

    perf1: {
        baseUrl: "https://perf1.tropicalsmoothiecafe.com"
    },

    prod1: {
        baseUrl: "https://prod1.tropicalsmoothiecafe.com"
    },

};

const env = process.env.ENV || 'stage1';

export default environments[env];