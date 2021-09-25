﻿using GoodChildren.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace GoodChildren
{
    public class ChatHub : Hub
    {
        [Authorize]
        public async Task Send(Chat model, string to)
        {
            var userName = Context.User.Identity.Name;

            if (Context.UserIdentifier != to) // если получатель и текущий пользователь не совпадают
                await Clients.User(to).SendAsync("Receive", model, Context.UserIdentifier);
            await Clients.User(Context.UserIdentifier).SendAsync("Receive", model, userName);
        }
    }
}
