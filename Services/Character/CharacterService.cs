using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using udemy.Models;
namespace udemy.Services.Character
{
    public interface ICharacterService
    {
        List<Models.Character> GetAll();
        Models.Character GetSingle();

    }
    public class CharacterService : ICharacterService
    {
        private static List<Models.Character> Knights = new List<Models.Character>()
        { new Models.Character(),
        new Models.Character(){Id=1, Name ="Sam"} };

        public List<Models.Character> GetAll()
        {
            return Knights;
        }

        public Models.Character GetSingle(int id)
        {
            return Knights.FirstOrDefault(c => c.Id == id);
        }

        public Models.Character GetSingle()
        {
            throw new NotImplementedException();
        }
    }
}
