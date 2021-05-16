using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace udemy.Models
{
    public interface IPerson
    {
        public void GetAge();
        public void GetSal();
        public DateTime DOB { get; set; }
        void SendMail(string message);
    }

    public class Employee : IPerson
    {
        public DateTime DOB { get; set; }

        public void GetAge()
        {
            //return age
        }

        public void GetSal()
        {
            //return sal
        }

        public void SendMail(string message)
        {
            //send mail
        }
    }

    public class Student : IPerson
    {
        public DateTime DOB { get; set; }


        public void GetAge()
        {
            //return age
        }

        public void GetSal()
        {
            throw new NotImplementedException();
        }

        public void SendMail(string message)
        {
            //send mail
        }
    }
}
