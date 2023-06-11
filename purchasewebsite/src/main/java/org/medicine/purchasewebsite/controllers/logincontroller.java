package org.medicine.purchasewebsite.controllers;

import org.medicine.purchasewebsite.dto.logindto;
import org.medicine.purchasewebsite.service.logincredentialsservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("http://localhost:4200/")
@RequestMapping(value="/login")
public class logincontroller {
	
	@Autowired
	private logincredentialsservice ls;
	
	@GetMapping(value= "/{user}")
	public logindto responsetologin(@PathVariable String user) {
		return ls.validateusername(user);
	}

}
