Feature: login

Scenario Outline: Valid login
	Given Invalid credentials <username> and <password>
	When I try to login
	Then application should return <view> page
	
Examples:
| username | password | view |
| raj | mohan | login |
| aaa | asadasd | login |
| 2323 | w3434 | login |
| admin | P@ssw0rd! | home |