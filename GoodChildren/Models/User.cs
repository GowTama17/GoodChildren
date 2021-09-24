using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoodChildren.Models
{
    public class User
    {
        public int Id { get; set; }
        public string LoginEmail { get; set; }
        public string Password { get; set; }       
        public string Role { get; set; }
        public string fullName { get; set; }
        public DateTime BirthDate { get; set; }
        public string cityChillHouse { get; set; }
        public string PhoneNum { get; set; }
    }
    
    
}
