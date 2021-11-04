package com.example.myapplication;


import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.media.Image;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.app.Activity;
import android.widget.ImageView;
import android.widget.TextView;
import android.net.Uri;

public class MainActivity7 extends AppCompatActivity {
    //ブログのURL定義
    //String blogStr = "https://techbooster.org/";

//    public void onCreateURL(Bundle savedInstanceState) {
//        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
//        //ブログのURL表示
//        TextView blogLink = (TextView)findViewById(R.id.blog_link);
//        blogLink.setText(blogStr);
//    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main7);

        final Button button1 = findViewById(R.id.button);
        button1.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity7.this, MainActivity.class);
                startActivity(intent);
            }
        });

        final Button button2 = findViewById(R.id.button2);
        button2.setOnClickListener(new View.OnClickListener(){

            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MainActivity7.this, MainActivity4.class);
                startActivity(intent);
            }
        });
    }
}

