
exports.seed = function(knex) {

  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, professor_id: 1, name: "Calvin Riley", email: "calvin@gmail.com", image_url: "https://ibb.co/D517kWp"  },
        {id: 2, professor_id: 1, name: "Cindy Lou", email: "cindy@gmail.com", image_url: "https://ibb.co/gjnrsxT"  },
        {id: 3, professor_id: 1, name: "John Smith", email: "john@gmail.com", image_url: "https://ibb.co/Pr9g04c"  },
        {id: 4, professor_id: 1, name: "Julian Mills", email: "julian@gmail.com", image_url: "https://ibb.co/R6kSgDG"  },
        {id: 5, professor_id: 1, name: "Kim Norris", email: "kim@gmail.com", image_url: "https://ibb.co/4WPpWts"  },
        {id: 6, professor_id: 1, name: "Marilyn Williams", email: "marilyn@gmail.com", image_url: "https://ibb.co/Hzq9XHY"  },
        {id: 7, professor_id: 1, name: "Solomon Ruthers", email: "solomon@gmail.com", image_url: "https://ibb.co/rxwjbp6"  },
        {id: 8, professor_id: 1, name: "Victoria Owens", email: "victoria@gmail.com", image_url: "https://ibb.co/z5y0hGr"  },
      ]);
    });
};
