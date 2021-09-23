using GoodChildren.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace GoodChildren.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private UserContext db;

        public HomeController(ILogger<HomeController> logger, UserContext context)
        {
            _logger = logger;
            db = context;
        }

        [Authorize]
        public IActionResult Index()
        {
            List<User> Test = db.Users.ToList();
            List<UserView> Model = new List<UserView>();
            for (int i = 0; i < Test.Count; i++)            
                Model.Add(new UserView() { Id = Test[i].Id, Email=Test[i].Email });         
            return View(Model);
        }

        public IActionResult message(int? id)
        {
            List<User> Test = db.Users.ToList();
            User Name = Test.FirstOrDefault(u => u.Id == id);
            Name.Password = " ";
            return View(Name);
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
