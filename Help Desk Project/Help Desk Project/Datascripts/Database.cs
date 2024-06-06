
/*
CREATE Database HelpDesk

CREATE TABLE Tickets (
TicketId INT PRIMARY KEY IDENTITY,
Subject NVARCHAR(MAX),
Details NVARCHAR(MAX),
Resolution NVARCHAR(MAX),
TicketStatus BIT,
);

CREATE TABLE Bookmarks (
BookmarkId INT PRIMARY KEY IDENTITY,
UserId NVARCHAR(50),
TicketId INT,
FOREIGN KEY (TicketId) REFERENCES Tickets(TicketId)
);*/

/*
INSERT INTO Tickets (Subject, Details, Resolution, TicketStatus) VALUES 
('Unable to connect to VPN', 'User cannot connect to the corporate VPN from home.', 'VPN server rebooted, user can now connect.', 1),
('Email not syncing', 'User email is not syncing on their phone.', 'No resolution yet.', 0),
('Slow internet speed', 'Internet speed is significantly slower than expected.', 'ISP contacted and issue resolved.', 1),
('Software installation issue', 'Error encountered during software installation.', 'No resolution yet.', 0),
('Printer not working', 'Printer is not responding to print commands.', 'Printer driver reinstalled, now working.', 1),
('Forgotten password', 'User forgot their login password.', 'No resolution yet.', 0),
('Unable to access shared folder', 'User cannot access a shared network folder.', 'Permissions updated, user now has access.', 1),
('Computer wont start', 'Users computer does not start up.', 'No resolution yet.', 0),
('Error in application', 'Application throws an error on startup.', 'Updated the application to the latest version.', 1),
('System crash', 'System crashes frequently during use.', 'No resolution yet.', 0); */