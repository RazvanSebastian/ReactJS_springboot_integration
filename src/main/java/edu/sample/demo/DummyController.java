package edu.sample.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@CrossOrigin("http://localhost:3000")
@Controller
public class DummyController {

    @Autowired
    private DummyService dummyService;

    @GetMapping("/users")
    public ResponseEntity<?> getUsers() throws InterruptedException {
        Thread.sleep(1500);
        return ResponseEntity.ok(dummyService.getDummies());
    }
}
