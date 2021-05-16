using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using udemy.Models;

namespace udemy.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CharacterController : ControllerBase
    {
        private static List<Character> Knights = new List<Character>()
        { new Character(),
        new Character(){Id=1, Name ="Sam"} };

        [HttpGet("GetAll")]
        public IActionResult Get()
        {
            return Ok(Knights);
        }

        [HttpGet("{id}")]
        public IActionResult GetSingle(int id)
        {
            return Ok(Knights.FirstOrDefault(c => c.Id == id));
        }

        //[HttpGet("{name}")]
        //public IActionResult GetSingle(string name)
        //{
        //    return Ok(Knights.FirstOrDefault(c => c.Name == name));
        //}

        [HttpPost]
        public IActionResult AddCharacter(Character character)
        {
            Knights.Add(character);
            return Ok(Knights);
        }

        [HttpPost("AddPerson")]
        public IActionResult AddPerson(Person person)
        {

            return Ok(person);
        }
    }

    public class Person
    {
        public string Name { get; set; }
        public int Id { get; set; }

    }
    public class Student : Person
    {
        public string Grade { get; set; }
    }
}
