const express = require('express');
const morgan = require('morgan');
const path = require('path');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/project/:id', (req, res) => {
  let options = {
    url: `http://ec2-18-221-81-42.us-east-2.compute.amazonaws.com/project/${req.params.id}`,
  }

  request(options, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      res.send(body);
    }
  });
});

app.post('/fillCreators', (req, res) => {
  let options = {
    method: 'POST',
    url: `http://ec2-18-221-81-42.us-east-2.compute.amazonaws.com/fillCreators/`,
  }

  request(options, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      res.send(body);
    }
  });
});

app.post('/fillProjects', (req, res) => {
  let options = {
    method: 'POST',
    url: `http://ec2-18-221-81-42.us-east-2.compute.amazonaws.com/fillProjects/`,
  }

  request(options, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      res.send(body);
    }
  });
});

app.get('/project/:projectId/section/:sectionName', (req, res) => {
  let options = {
    url: `http://ec2-13-57-250-36.us-west-1.compute.amazonaws.com/project/${req.params.projectId}/section/${req.params.sectionName}`,
  }

  request(options, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      res.send(JSON.parse(body));
    }
  });
});

app.get('/projects/:id', (req, res) => {
  let options = {
    url: 'http://ec2-18-222-231-30.us-east-2.compute.amazonaws.com/projects/2',
  }

  request(options, (err, response, body) => {
    if (err) {
      throw err;
    } else {
      res.send(body);
    }
  });
});

app.get('/:project/:projectId/section/comments', (req, res) => {
  let options = {
    url: `http://ec2-18-218-231-125.us-east-2.compute.amazonaws.com/${req.params.project}/${req.params.projectId}/section/comments`,
  }

  request(options, (err, response, body) => {
    if (err) {
      console.log(err);
    }
    console.log('hits');
    res.send(JSON.parse(body));
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});