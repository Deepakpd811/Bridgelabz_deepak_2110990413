//simple callback example 
const takedata = (cb) => {
  setTimeout(() => {
    console.log("taking the data  in 2sec");
    cb();
  }, 2000);
};

const processdata = (cb) => {
  setTimeout(() => {
    console.log("processdata.....  complete  in 3sec");
    cb();
  }, 3000);
};
const validatedata = (cb) => {
  setTimeout(() => {
    console.log("validatedata.....  complete  in 3sec");
    cb();
  }, 3000);
};
const sendtouser = (cb) => {
  setTimeout(() => {
    console.log("sendtouser.....  complete  in 2sec");
    cb();
  }, 2000);
};
// callback hell ---------------------------------------------------------------------------------
takedata(() => {
  console.log("taking......");
  processdata(() => {
    console.log("processing......");
    validatedata(() => {
      console.log("validating......");
      sendtouser(() => {
        console.log("sendto user  complete......");
      });
    });
  });
});

const takePromiseData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("takedata..... complete  in 2sec");
      resolve();
    }, 2000);
  });
};

const processPromiseData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("processdata.....  complete  in 3sec");
      resolve();
    }, 3000);
  });
};
const validatePromiseData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("validatedata.....  complete  in 3sec");
      resolve();
    }, 3000);
  });
};
const sendToUserPromiseData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("sendtouser.....  complete  in 2sec");
      resolve();
    }, 2000);
  });
};

// promise based --------------------------------------------------------------------------
const promisedata = () => {
  takedata()
    .then(() => {
      console.log("taking......");
      return processPromiseData();
    })
    .then(() => {
      console.log("processing......");
      return validatePromiseData();
    })
    .then(() => {
      console.log("validating......");
      return sendToUserPromiseData();
    })
    .then(() => {
      console.log("send to user");
    })
    .catch((err) => {
      console.log(err);
    });
};

// async await ---------------------------------------------------------------------------------

const getdata = async () => {
  console.log("starting the process...");
  await takePromiseData();
  console.log("taking......");
  await processPromiseData();
  console.log("processing......");
  await validatePromiseData();
  console.log("validating......");
  await sendToUserPromiseData();
  console.log("send to user complete......");
  console.log("process completed!");
};

// getdata();
promisedata();
