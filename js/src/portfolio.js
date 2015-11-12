define(['jquery', 'template'], function ($, template) {
  var projects = [];
  var generate = function (cb) {
    if (typeof cb !== 'function') {
      return;
    }

    $.getJSON('/model/projects.json').done(function (data) {
      $.each(data.projects, function (index, project) {
        projects.push(project);
      });

      cb(template.portfolio({ cards: projects }));
    });
  };

  return {
    generate: generate
  };
});
