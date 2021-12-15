using FluentValidation;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Presentismo.Application.Features.Version1.Workday.Commands.StartWorkday.StartWorkdayContract;

namespace Presentismo.Application.Features.Version1.Workday.Validations
{
    public class DataStartValidation : AbstractValidator<DataStart>
    {
        public DataStartValidation()
        {
            RuleFor(data => data.User).NotEmpty().Length(4, 50);
        }
    }
}
